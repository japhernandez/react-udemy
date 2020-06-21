import React from "react";
import { shallow } from "enzyme";
import Counter from "../components/Counter";

describe("Testing CounterApp", () => {
  let wrapper, counterText;

  beforeEach(() => {
    wrapper = shallow(<Counter value={10} />);
    counterText = wrapper.find("h2").text().trim();
  });

  test("should render Counter component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should show by default the value of 10", () => {
    expect(counterText).toBe("10");
  });

  test("should must increase with the +1 button to the initial value", () => {
    // find : Search by button element
    // at: Bring the first button
    // simulate: Simulation button of click
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("11");
  });

  test("should you must subtract the initial value with the -1 button", () => {
    // find : Search by button element
    // at: Bring the first button
    // simulate: Simulation button of click
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("9");
  });

  test("should it must put the default value when clicking on the reset button", () => {
    // find : Search by button element
    // at: Bring the first button
    // simulate: Simulation button of click
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("10");
  });
});
