import { shallowMount, createLocalVue } from '@vue/test-utils';
import about from "@/views/About.vue"
import Vuex from 'vuex';
import VueRouter from 'vue-router';
describe("about.vue", () => {
  let wrapper;
  let mockStore;
  const router = new VueRouter();
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    mockStore = {
      state: {
        allshows: [],
  searchshows: [],
  particularshow:[],
  episodesdetails:[],
  cast:[],
  popular: []
      },
      dispatch: jest.fn(),
      actions: {
        viewShowDetailsStore: jest.fn(),
        viewEpisodeDetailsStore: jest.fn(),
        castDetailsStore: jest.fn()
    },
    };
    wrapper = shallowMount(about, {
      mocks: {
        $store: mockStore,
      },
      data: () => ({
        showId: 169
    }),
      localVue,
      router
    });
  })
  afterEach(() => {
    wrapper.destroy();
  });
  it("checks whether it is a vue instance", () => {

    expect(wrapper.isVueInstance()).toBeTruthy();
  })
  it("checks created ", () => {
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith('viewShowDetailsStore',169);
  })
  it("checks episodes method", () => {
    wrapper.vm.episodes();
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith('viewEpisodeDetailsStore',169);
  })
  it("checks showCast method", () => {
    wrapper.vm.showCast();
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith('castDetailsStore',169);
  })
  it("checks backToHome method", () => {
    wrapper.vm.backToHome();
    expect(wrapper.vm.$route.path).toBe("/");
  })
})