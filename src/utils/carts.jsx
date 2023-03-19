import React, { Component } from "react";
class Cart extends Component {
  state = {
    CartsItem: [
      { Id: 1, value: 4 },
      { Id: 2, value: 0 },
      { Id: 3, value: 0 },
      { Id: 4, value: 0 },
    ],
  };
  //   formatCount = (c) => {
  //     return
  //   };

  render() {
    return (
      <div className="conatiner m-2">
        {this.state.CartsItem.map((c) => (
          <div className="row">
            <div className="col-1">
              <span className={this.getBadgeClasses()} key={c.Id}>
                {c.value === 0 ? "zero" : c.value}
              </span>
            </div>
            <div className="col">
              <button className="btn btn-sm m-2">+</button>
              <button className="btn btn-sm m-2">-</button>
              <button className="btn btn-sm m-2 btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.state.CartsItem.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.state.CartsItem;
    return value === 0 ? "Zero" : value;
  }
}

export default Cart;
