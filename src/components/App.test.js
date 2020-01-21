import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";
import Enzyme, { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Tests rendered", () => {
  it("App rendered without problem", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Hello world rendered", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("i").text()).toBe("Hello world");
  });
});
