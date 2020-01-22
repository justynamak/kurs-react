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
  it("Header changes state according to state", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find("header").text()).toBe("Black Bookstore");
    wrapper.setState({
      bookStoreName: "White Bookstore"
    });
    expect(wrapper.find("header").text()).toBe("White Bookstore");
  });

  it("Header state changes after clicking", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.state().bookStoreName).toBe("Black Bookstore");

    wrapper.find(".header").simulate("click");
    expect(wrapper.state().bookStoreName).toBe("White Bookstore");
  });
  it("Snapshot matches", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
