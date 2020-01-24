import React, { Component } from "react";
import AdminPanel from "./AdminPanel/AdminPanel";
import Order from "./Order/Order";
import Header from "./Header/Header";
import Inventory from "./Inventory/Inventory";
import Footer from "./Footer/Footer";
import "../index.css";

class App extends Component {
  state = {
    order: []
  };

  addToOrder = book => {
    const order = [...this.state.order, book];
    this.setState({
      order
    });
  };
  removeFromOrder = title => {
    const order = this.state.order.filter(book => book.name !== title);
    this.setState({
      order
    });
  };
  render() {
    const { order } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="mx-5">
          <div className="row mt-5 mb-2">
            <Order removeFromOrder={this.removeFromOrder} order={order} />
            <Inventory addToOrder={this.addToOrder} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
