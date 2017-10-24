<template>
  <v-container>
    <v-layout row wrap mb-2>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large to="/meetup/create" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :widht="7"
          :height="7"
          :size="70"
          v-if="loading"
          >
        </v-progress-circular>
      </v-flex>
    </v-layout>
		<v-layout row wrap mt-2 v-if="!loading">
			<v-flex xs12>
				<v-carousel style="cursor: pointer">
					<v-carousel-item
						v-for="meetup in meetups"
						:src="meetup.imageUrl"
						:key="meetup.id"
            @click="onLoadMeetup(meetup.id)"
            >
            <div class="title">
              {{meetup.title}}
            </div>
					</v-carousel-item>
				</v-carousel>
			</v-flex>
		</v-layout>
    <v-layout row wrap mb-2>
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  },
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style lang="css" scoped>
  .title {
    position: absolute;
    bottom: 50px;
    border-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
