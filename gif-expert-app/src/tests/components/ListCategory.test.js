import React from "react";
import { shallow } from "enzyme";
import ListCategory from "../../components/ListCategory";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Component <ListCategory />", () => {
  const category = "One Punch";

  it("should must show component correctly", () => {
    useFetchGifs.mockReturnValue({ data: [], loading: true });
    const wrapper = shallow(<ListCategory category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should show items when the useFetchGifs data is loaded", () => {
    const gifs = [
      {
        id: "123490",
        url: "https://localhost:6000/image.jpg",
        title: "Imagen de muestra",
      },
    ];
    useFetchGifs.mockReturnValue({ data: gifs, loading: false });
    const wrapper = shallow(<ListCategory category={category} />);
    expect(wrapper).toMatchSnapshot();
    // 1. El componente <GifItem /> debe de existir
    expect(wrapper.find("GifItem").length).toBe(gifs.length);
    // 2. El parrajo no debe de existir por que el <GifItem /> tiene elementos
    expect(wrapper.find("p").exists()).toBe(false);
  });
});
