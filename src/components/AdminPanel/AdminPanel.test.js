import React from "react";
import ReactDOM from "react-dom";
import AdminPanel from "./AdminPanel";
import Enzyme, { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("AdminPanel rendered", () => {
  it("AdminPanel rendered without problem", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AdminPanel />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("AdminPanel rendered", () => {
    const wrapper = shallow(<AdminPanel />);

    expect(wrapper.find("div").text()).toBe("Panel administratora");
  });
});
