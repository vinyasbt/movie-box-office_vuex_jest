<template>
  <div class="home">
    <Header />
    <div v-if="!spinner">
    <b-container  v-if="$store.state.searchshows.length>0">
      <b-row>
        <b-col
          md="4"
          lg="3"
          sm="3"
          v-for="(s, index) in $store.state.searchshows"
          :key="index"
          id="grid"
        >
          <router-link :to="'/about/' + s.show.id">
            <br />
            <h4>{{ s.show.name }}</h4>
            <p v-if="s.show.image != null">
              <img v-bind:src="s.show.image.medium" id="image" />
            </p>
            <p v-else-if="!spinner">
              <!-- <b-spinner variant="light" type="grow"></b-spinner> -->
              <img src="../assets/images.jpg"  />
            </p>
            <span class="details">
              <b-icon icon="camera-reels-fill"></b-icon>{{ s.show.language }}

              <b-icon icon="calendar-minus"></b-icon>{{ s.show.status }}
            </span>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
    </div>
      <div v-else>
        <b-spinner variant="light" type="grow"></b-spinner>
      </div>
    <br />
    <br />
    <b-container class="bv-example-row" >
      <h3>Popular shows</h3>
      <br />
        <b-row>
          <b-col
            md="4"
            lg="3"
            sm="3"
            v-for="(p, index) in $store.state.popular"
            :key="index"
            id="grid"
          >
            <router-link :to="'/about/' + p.id">
              <br />
              <h4>{{ p.name }}</h4>
              <p v-if="p.image != null">
                <img v-bind:src="p.image.medium" id="image" />
              </p>
              <span class="details">
                <b-icon icon="camera-reels-fill"></b-icon>{{ p.language }}
                <b-icon icon="star-fill"></b-icon>{{ p.rating.average }}
                <!-- {{p.genres.map((gen)=>gen)}} -->
                <b-icon icon="calendar-minus"></b-icon>{{ p.status }}
              </span>
            </router-link>
          </b-col>
        </b-row>
    </b-container>
    <br />
    <br />
    <b-container class="bv-example-row" >
      <div v-for="(g, index) in genres" :key="index">
        <br />
        <br />
        <h3>{{ g.name }}</h3>
        <br />
        <b-row>
          <b-col
            md="4"
            lg="3"
            sm="3"
            v-for="(gs, index) in g.genreshows"
            :key="index"
            id="grid"
          >
            <router-link :to="'/about/' + gs.id">
              <br />
              <h4>{{ gs.name }}</h4>
              <p v-if="gs.image != null">
                <img v-bind:src="gs.image.medium" id="image" />
              </p>
              <span class="details">
                <b-icon icon="camera-reels-fill"></b-icon>{{ gs.language }}
                <b-icon icon="star-fill"></b-icon>{{ gs.rating.average }}
                <b-icon icon="calendar-minus"></b-icon>{{ gs.status }}
              </span>
            </router-link>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      searchdata: "",
      searchshows: [],
      genreshows: [],
      allshows: [],
      // popular: [],
      // conditionRender: true,
      message: "enter valid series name",
      spinner: true
    };
  },
  created() {
    this.$store.dispatch("getAllShowsStore");
    console.log(this.$store.state.allshows,'in creatd')
      // this.popular = this.$store.state.allshows
      //   .filter(show => show.rating.average)
      //   .sort((a, b) => (a.rating.average < b.rating.average ? 1 : -1))
      //   .slice(0, 12);
      // console.log("allshows array", this.$store.state.allshows);
      this.spinner = false;
      // console.log("genre array",this.genreshows)
  },
  computed: {
    genreTitles() {
      return Array.from(new Set(this.$store.state.allshows.flatMap(shows => shows.genres)));
      //
    },
    genres() {
      console.log("genre titles", this.genreTitles);
      return this.genreTitles.map(genre => {
        return {
          name: genre,
          genreshows: this.$store.state.allshows
            .filter(show => show.genres.includes(genre))
            .filter(show => show.rating.average)
            .sort((a, b) => (a.rating.average < b.rating.average ? 1 : -1))
            .slice(0, 12)
        };
      });
    }
  }
};
</script>
<style scoped>
.grid {
  width: 300px;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  margin: 80px;
  float: left;
  height: 400px;
}
.search {
  margin: 10px;
}
.image {
  width: 290px;
  border-radius: 10px;
  /* border:1px solid #f1f1f1; */
  float: left;
  height: 330px;
}
#searchshows {
  background-color: black;
}
#popular {
  background-color: black;
}
h4 {
  color: azure;
}
h3 {
  color: lightgoldenrodyellow;
}
.details {
  color: antiquewhite;
}
.home {
  background-color: black;
}
#grid {
  width: 100%;
  border-radius: 10px;
  /* border:1px solid #f1f1f1; */
  /* margin:45px; */
  /* float: left; */
  height: 100%;
  /* padding: 20px;  */
}
#image {
  width: 80%;
  border-radius: 10px;
  /* border:1px solid #f1f1f1; */
  /* float: left; */
  height: 70%;
}
#image:hover {
  transform: scale(1.25);
}
</style>