import React from "react";
import { shallow } from "enzyme";
import GifItem from "../../components/GifItem";

describe("Component <GefItem />", () => {
  const url = "https://gif.com";
  const title = "title gif";
  const wrapper = shallow(<GifItem url={url} title={title} />);
  it("should must show component correctly ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a title within a paragraph", () => {
    const paragraph = wrapper.find("p").text().trim();
    expect(paragraph).toBe(title);
  });

  it("should have a url within a img and alt", () => {
    const image = wrapper.find("img");

    expect(image.prop("src")).toBe(url);
    expect(image.prop("alt")).toBe(title);
  });

  it("should have the class card in div", () => {
    const div = wrapper.find("div");
    const className = div.props().className;
    expect(className.includes("card")).toBe(true);
  });
});
