import store from "@/store/index";
import {getAllShows,getshow,viewEpisodeDetails,viewShowDetails,castDetails} from "../../src/show.service.js";
jest.mock('../../src/show.service.js');
it('assigning allshows', () => {
  const state = {
    allshows: []
  }
  const shows =  [{ showid: 1 }, { showid: 2 }, { showid: 3 }] ;
  store.mutations.SET_ALLSHOWS(state, shows)
  expect(state.allshows).toBe(shows)
})
it('assigning searchshow', () => {
    const state = {
        searchshows: []
    }
    const shows =  [{ showid: 1 }, { showid: 2 }, { showid: 3 }] ;
    store.mutations.SET_SEARCHSHOWS(state, shows)
    expect(state.searchshows).toBe(shows)
  })
  it('assigning particularshow', () => {
    const state = {
        particularshow: []
    }
    const shows =  [{ showid: 1 }, { showid: 2 }, { showid: 3 }] ;
    store.mutations.SET_PARTICULARSHOWS(state, shows)
    expect(state.particularshow).toBe(shows)
  })
  it('assigning episodesdetails', () => {
    const state = {
        episodesdetails: []
    }
    const shows =  [{ showid: 1 }, { showid: 2 }, { showid: 3 }] ;
    store.mutations.SET_EPISODEDETAILS(state, shows)
    expect(state.episodesdetails).toBe(shows)
  })
  it('assigning cast', () => {
    const state = {
        cast: []
    }
    const shows =  [{ showid: 1 }, { showid: 2 }, { showid: 3 }] ;
    store.mutations.SET_CAST(state, shows)
    expect(state.cast).toBe(shows)
  })
  it('assigning popular', () => {
    const state = {
        popular: []
    }
    const shows =  [{ showid: 1 }, { showid: 2 }, { showid: 3 }] ;
    store.mutations.SET_POPULAR(state, shows)
    expect(state.popular).toBe(shows)
  })
  it('getAllShowsStore should commits meals data returned by  Api ', async () => {
    let commit = jest.fn();
    const shows =  {data:[1,2,3]}
    // Control mock to resolve with an array of objects
    getAllShows.mockResolvedValue(shows);
    await store.actions.getAllShowsStore({ commit});
    expect(commit).toHaveBeenCalledWith('SET_ALLSHOWS', shows.data);
  });
  it('getshowStore should commits meals data returned by  Api ', async () => {
    let commit = jest.fn();
    const shows =  {data:[1,2,3]}
    // Control mock to resolve with an array of objects
    getshow.mockResolvedValue(shows);
    await store.actions.getshowStore({ commit});
    expect(commit).toHaveBeenCalledWith('SET_SEARCHSHOWS', shows.data);
  });
  it('viewShowDetailsStore should commits meals data returned by  Api ', async () => {
    let commit = jest.fn();
    const shows =  {data:[1,2,3]}
    // Control mock to resolve with an array of objects
    viewShowDetails.mockResolvedValue(shows);
    await store.actions.viewShowDetailsStore({ commit});
    expect(commit).toHaveBeenCalledWith('SET_PARTICULARSHOWS', shows.data);
  });
it('viewEpisodeDetailsStore should commits meals data returned by  Api ', async () => {
    let commit = jest.fn();
    const shows =  {data:[1,2,3]}
    // Control mock to resolve with an array of objects
    viewEpisodeDetails.mockResolvedValue(shows);
    await store.actions.viewEpisodeDetailsStore({ commit});
    expect(commit).toHaveBeenCalledWith('SET_EPISODEDETAILS', shows.data);
  });
  it('castDetailsStore should commits meals data returned by  Api ', async () => {
    let commit = jest.fn();
    const shows =  {data:[1,2,3]}
    // Control mock to resolve with an array of objects
    castDetails.mockResolvedValue(shows);
    await store.actions.castDetailsStore({ commit});
    expect(commit).toHaveBeenCalledWith('SET_CAST', shows.data);
  });
//   it('getAllShowsStore rejected values', async () => {
//     let commit = jest.fn();
//     const errordata="provide valid api"
//     castDetails.mockRejectedValue(errordata);
//     await store.actions.castDetailsStore({ commit});
//     expect(store.actions.castDetailsStore({ commit})).toThrow(errordata);
//   });