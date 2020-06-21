import React from "react";
import "@testing-library/jest-dom";
const { shallow } = require("enzyme");
const { default: AddCategory } = require("../../components/AddCategory");

describe("Component <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  it("should must show component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should you must change the text box", () => {
    const input = wrapper.find("input");
    const value = "samurai x";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  it("should not post the information with submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  it("should call the setCategories and clear the text box", () => {
    const value = "input value";
    const input = wrapper.find("input");
    // 1. Simular el inputChange
    input.simulate("change", { target: { value } });
    // 2. Simular el submit
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    // 3. setCategories debe ser llamado
    expect(setCategories).toHaveBeenCalled();
    // 3.1 setCategories espera ser llamada una vez
    expect(setCategories).toHaveBeenCalledTimes(1);
    // 3.2 setCategories debe de ser una funcion
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    // 4. El valor del input debe de estar ''
    expect(input.prop("value")).toBe("");
  });
});
