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
    const books = [];
    ReactDOM.render(<Inventory books={books} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Snapshot matches", () => {
    const books = [];
    const wrapper = shallow(<Inventory books={books} />);
    expect(wrapper).toMatchSnapshot();
  });
});
