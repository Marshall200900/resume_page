import React from "react";
import { shallow } from "enzyme";
import Skills_list from "./skills_list";

describe("Skills_list", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Skills_list />);
    expect(wrapper).toMatchSnapshot();
  });
});
