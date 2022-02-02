import { useState } from "react";

export const Product = (props) => {
  const total = props.count;
  const [count, setCount] = useState(0);

  function handleIncrement() {
    if (count < total) {
      setCount(count + 1);
    } else console.log("maximum number");
  }

  function handleDecrement() {
    if (count !== 0) {
      setCount(count - 1);
    } else console.log("minimum number");
  }

  function handleDelete() {
    props.onDelete(props.id)
  }

  return (
    <div>
      <span className="m-2 text-info">{props.productName}</span>
      <span className="p-2 m-2 bg-warning">{count}</span>
      <button onClick={handleIncrement} className="m-2 bg-success">
        +
      </button>
      <button onClick={handleDecrement} className="m-2 bg-warning">
        -
      </button>
      <button onClick={handleDelete} className="m-2 bg-danger">delete</button>
    </div>
  );
};

export default Product;