import React, { Component } from "react";
import OrderView from "../Views/OrderView";

class Order extends Component {
  render() {
    const order = this.props.order.map(book => (
      <OrderView
        key={book.name}
        book={book}
        removeFromOrder={this.props.removeFromOrder}
      />
    ));
    return (
      <div className="order col-md-5">
        <h2 className="text-center mb-2">Your order</h2>
        {order.length ? <ul>{order}</ul> : null}
      </div>
    );
  }
}
export default Order;
