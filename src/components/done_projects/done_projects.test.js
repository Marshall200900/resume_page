import React from "react";
import { shallow } from "enzyme";
import Done_projects from "./done_projects";

describe("Done_projects", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Done_projects />);
    expect(wrapper).toMatchSnapshot();
  });
});
