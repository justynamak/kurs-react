import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import Inventory from "./Inventory";
import Enzyme, { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Tests rendered", () => {
  it("Inventory rendered without problem", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Inventory />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Inventory text rendered", () => {
    const wrapper = shallow(<Inventory />);

    expect(wrapper.find("div").text()).toBe("Inventory");
  });
});
