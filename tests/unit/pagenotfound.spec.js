import { shallowMount, createLocalVue } from "@vue/test-utils";
import pagenotfound from "@/views/PageNotFound.vue";
import VueRouter from "vue-router";
import router from "@/router";
describe("In PageNotFound Component", () => {
  let pagenotfoundWrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    pagenotfoundWrapper = shallowMount(pagenotfound, {
      localVue,
      router,
    });
  });
  afterEach(() => {
    pagenotfoundWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(pagenotfoundWrapper.isVueInstance).toBeTruthy();
  });
  it('has routes to home page',  () => {
    pagenotfoundWrapper.vm.goHome();
    expect(pagenotfoundWrapper.vm.$route.path).toBe("/");
  })
});