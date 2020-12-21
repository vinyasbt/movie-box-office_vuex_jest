<template>
  <div class="about">
    <b-container class="bv-example-row">
      <b-row align-v="center" align-h="center">
        <b-col md="4">
          <!-- <img
            :src="$store.state.particularshow.image.medium"
            class="img-responsive"
            id="image"
          /> -->
           <p v-if="$store.state.particularshow.image!= null">
              <img v-bind:src="$store.state.particularshow.image.medium" id="image" class="img-responsive"/>
            </p>
            <p v-else>
              <img src="../assets/images.jpg" class="img-responsive"/>
            </p>
        </b-col>

        <b-col md="8">
          <div class="data">
            <h1>{{ $store.state.particularshow.name }}</h1>
            <h4>Language : {{ $store.state.particularshow.language }}</h4>
            <h4>RunTime : {{ $store.state.particularshow.runtime }}</h4>
            <h4>Status : {{ $store.state.particularshow.status }}</h4>
            <!-- <h4>Rating : {{ $store.state.particularshow.rating.average}}</h4> -->
            <!-- <h4>Genres :</h4> -->
            <!-- <h4>{{ $store.state.particularshow.genres.join(",") }}</h4> -->
            <h4>Summary :</h4>
            <h5><span v-html="$store.state.particularshow.summary" /></h5>
            <!-- <button @click="episodes()" class="btn btn-primary">Show Episodes</button> -->
            <!-- <button @click="backToHome()" class="btn btn-success">Home</button> -->
            <!-- <button @click="showCast()" class="btn btn-secondary">Showcast</button> -->
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              @click.prevent="episodes()"
              variant="primary"
            >
              <b-icon icon="easel"></b-icon>Show Episodes
            </b-button>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              @click.prevent="backToHome()"
              variant="secondary"
            >
              <b-icon icon="arrow-left-circle"></b-icon>Back
            </b-button>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              @click.prevent="showCast()"
              variant="primary"
            >
              <b-icon icon="person"></b-icon>Show Cast
            </b-button>
          </div></b-col
        >
      </b-row>
    </b-container>

    <div>
      <br />
      <!-- <table v-if="conditionalRender == false"> -->
      <b-container class="bv-example-row" v-if="conditionalRender == false">
        <b-row>
          <b-col
            md="4"
            lg="4"
            sm="6"
            v-for="(e, index) in $store.state.episodesdetails"
            :key="index"
            id="grid"
          >
            <h4>{{ e.name }}</h4>
            <p v-if="e.image != null">
              <img :src="e.image.medium" class="episodeimage" />
            </p>
          </b-col>
        </b-row>
      </b-container>

      <!-- </table> -->
      <b-container class="bv-example-row" v-else>
        <b-row>
          <b-col
            md="4"
            lg="4"
            sm="6"
            v-for="(c, index) in $store.state.cast"
            :key="index"
            id="grid"
          >
            <h4>{{ c.person.name }}</h4>
            <p v-if="c.person.image != null">
              <img :src="c.person.image.medium" class="episodeimage" />
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      showId: this.$route.params.id,
      conditionalRender: false
    };
  },

  created() {
    console.log("showID", this.showId);
    this.$store.dispatch("viewShowDetailsStore", this.showId);
  },
  methods: {
    backToHome() {
      this.$router.push("/");
    },
    episodes() {
      this.conditionalRender = false;
      this.$store.dispatch("viewEpisodeDetailsStore", this.showId);
    },
    showCast() {
      this.conditionalRender = true;
      this.$store.dispatch("castDetailsStore", this.showId);
    }
  }
};
</script>
<style scoped>
.data {
  background-color: black;
  color: lightcyan;
}
#image {
  width: 100%;
  /* border:1px solid #f1f1f1; */
  margin-top: 50px;
  height: 100%;
}
#grid {
  width: 100%;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  height: 100%;
}
.episodeimage {
  width: 100%;
  height: 350px;
}
.about {
  background-color: black;
}
h4 {
  color: azure;
}
</style>