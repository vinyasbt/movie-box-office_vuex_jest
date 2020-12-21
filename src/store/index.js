// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// });
import {getshow,getAllShows,viewShowDetails,viewEpisodeDetails,castDetails} from '../show.service.js'
// import {getshow,viewShowDetails,viewEpisodeDetails,getAllShows,castDetails} from '../show.service.js'
const state = {
  allshows: [],
  searchshows: [],
  particularshow:[],
  episodesdetails:[],
  cast:[],
  popular: []
}
const mutations = {
  SET_ALLSHOWS(state, allshowsarray) {
    console.log("in mutation")
    state.allshows = allshowsarray;
    console.log("in mutation",state.allshows)
  },
  SET_SEARCHSHOWS(state, searchshowsarray) {
    state.searchshows = searchshowsarray;
    console.log("in mutation",state.searchshows)
  },
  SET_PARTICULARSHOWS(state, particularshowsarray) {
    state.particularshow = particularshowsarray;
    console.log("in mutation",state.particularshow)
  },
  SET_EPISODEDETAILS(state, episodesdetailsarray) {
    state.episodesdetails = episodesdetailsarray;
    console.log("in mutation",state.episodesdetails)
  },
  SET_CAST(state, castarray) {
    state.cast = castarray;
    console.log("in mutation",state.cast)
  },
  SET_POPULAR(state, popularshowsarray) {
    console.log("in mutation")
    state.popular = popularshowsarray;
    console.log("in mutation",state.popular)
  },
}
  const actions = {
    async getAllShowsStore({ commit }) {
       getAllShows().then((result) => {
          commit('SET_ALLSHOWS', result.data)
          const popularSeries=this.state.allshows.filter(show => show.rating.average)
          .sort((a, b) => (a.rating.average < b.rating.average ? 1 : -1))
          .slice(0, 12);
          commit('SET_POPULAR', popularSeries)
      })
        .catch(error => {
          console.log(error);
        })
    },
    async getshowStore({ commit },payload) {
      getshow(payload).then((result) => {
        commit('SET_SEARCHSHOWS', result.data)
      })
        .catch(error => {
          console.log(error);
        })
    },
    async viewShowDetailsStore({ commit },payload) {
      viewShowDetails(payload).then(result=>{
        commit('SET_PARTICULARSHOWS', result.data)
      })
        .catch(error => {
          console.log('qwerty',error);
          // this.$router.push({ name: "PageNotFound" });
        })
    },
    async viewEpisodeDetailsStore({ commit },payload) {
      viewEpisodeDetails(payload).then(result=>{
        commit('SET_EPISODEDETAILS', result.data)
      })
        .catch(error => {
          console.log(error); 
        })
    },
    async castDetailsStore({ commit },payload) {
      castDetails(payload).then(result=>{
        commit('SET_CAST', result.data)
      })
        .catch(error => {
          console.log(error);
        })
    }
}
export default {
  state,
  actions,
  mutations
}