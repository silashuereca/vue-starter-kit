import { mount } from "@vue/test-utils";
import StarterProject from "../../src/components/StarterProject.vue";

test("make sure elements are rendered correctly", () => {
  const wrapper = mount(StarterProject);

  expect(wrapper.element).toMatchSnapshot();
});
