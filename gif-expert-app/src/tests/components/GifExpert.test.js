import React from "react";
import { shallow } from "enzyme";
import GifExpert from "../../components/GifExpert";
import GifItem from "../../components/GifItem";

describe("Component <GitExpert />", () => {
  beforeEach(() => {});
  it("should must show component correctly", () => {
    const wrapper = shallow(<GifExpert />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should show a list of categories", async () => {
    const categories = ["One Punch", "Dragon ball"];
    const wrapper = shallow(<GifExpert defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("ListCategory").length).toBe(categories.length);
  });
});
