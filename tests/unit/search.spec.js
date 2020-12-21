import { shallowMount, createLocalVue } from '@vue/test-utils';
import search from "@/components/Search.vue"
import Vuex from 'vuex';
import VueRouter from 'vue-router';
describe("search.vue", () => {
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
        getshowStore: jest.fn()
    },
    };
    wrapper = shallowMount(search, {
      mocks: {
        $store: mockStore,
      },
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
  it("checks search data", () => {
    wrapper.vm.sendShowName();
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith('getshowStore','');
  })
  it("checks search data having showname", () => {
    wrapper.setData({ searchData: 'suits' })
    wrapper.vm.sendShowName();
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith('getshowStore','suits');
  })
})