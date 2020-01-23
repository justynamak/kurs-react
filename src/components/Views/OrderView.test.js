import React from "react";
import ReactDOM from "react-dom";
import OrderView from "./OrderView";
import Enzyme, { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Tests rendered", () => {
  it("Snapshot matches", () => {
    const book = {
      name: "Book title"
    };
    const wrapper = shallow(<OrderView book={book} />);

    expect(wrapper).toMatchSnapshot();
  });
  it("Title of the book is display as in props", () => {
    const book = {
      name: "Book title"
    };
    const wrapper = shallow(<OrderView book={book} />);
    expect(wrapper.find("#orderViewName").text()).toBe(book.name);
  });
});
