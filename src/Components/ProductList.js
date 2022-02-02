import { useState } from "react";
import Product from "./Product";

export const ProductList = () => {
  const [productList, setProductList] = useState([
    { id: 1, productName: "laptop", count: 3 },
    { id: 2, productName: "phone", count: 5 },
    { id: 3, productName: "tablet", count: 4 },
  ]);

  // for delete product i will passed to Product Component there call it
  function handleDelete(productId) {
    const newProducts = productList.filter((product) => {
      return product.id !== productId;
    });
    setProductList(newProducts);
  }

  function handleReset() {
    this.state.productList.map((product) => (product.count = 0));
  }

  return (
    <div>
      <button className="m-2 p-5 bg-primary">reset</button>
      {productList.map((product) => {
        return (
          <Product
            id={product.id}
            key={product.id}
            productName={product.productName}
            count={product.count}
            onDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default ProductList