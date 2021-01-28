import React from "react";
import { shallow } from "enzyme";
import About_myself from "./about_myself";

describe("About_myself", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<About_myself />);
    expect(wrapper).toMatchSnapshot();
  });
});
