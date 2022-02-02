import { Component } from "react";


export class Product extends Component {
  state = {
    count: 0,
    total: 5,
  };

  handleIncrement = () => {
    if (this.state.count < this.state.total) {
      this.setState({ count: this.state.count + 1 });
    } else {
      console.log("maximum number!!!!");
    }
  };
  handleDecrement = () => {
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      console.log("minimum number!!!!");
    }
  };

  render() {
    return (
      <div>
        <span className="m-2 text-info">{this.props.productName}</span>
        <span className="p-2 m-2 bg-warning">{this.state.count}</span>
        <button onClick={this.handleIncrement} className="m-2 bg-success">
          +
        </button>
        <button onClick={this.handleDecrement} className="m-2 bg-warning">
          -
        </button>
        <button className="m-2">delete</button>
      </div>
    );
  }
}

export default Product