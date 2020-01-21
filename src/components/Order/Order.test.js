import React from "react";
import ReactDOM from "react-dom";
import Order from "./Order";
import Enzyme, { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Tests rendered", () => {
  it("Order rendered without problem", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Order />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Hello world rendered", () => {
    const wrapper = shallow(<Order />);

    expect(wrapper.find("div").text()).toBe("Order");
  });
});
