import { shallowMount } from "@vue/test-utils";

import App from "../src/App.vue";

describe("App.vue", () => {
  test("renders a string sent as a prop", () => {
    const location = "Location";
    const wrapper = shallowMount(App, {
      propsData: { location }
    });
    expect(wrapper.text()).toMatch(location);
  });
});
