import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Enzyme, { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Tests rendered", () => {
  it("Header rendered without problem", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Header text rendered", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find("div").text()).toBe("Header");
  });
});
