import React from "react";
import ReactDOM from "react-dom";
import Order from "./Order";
import Enzyme, { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Tests rendered", () => {
  it("Order rendered without problem", () => {
    const div = document.createElement("div");
    const order = [];
    ReactDOM.render(<Order order={order} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Snapshot matches", () => {
    const order = [];
    const wrapper = shallow(<Order order={order} />);

    expect(wrapper).toMatchSnapshot();
  });
});
