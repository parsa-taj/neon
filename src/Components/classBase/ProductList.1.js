import React, { Component } from "react";
import Product from "./Product";


export default class ProductList extends Component {
    state = {
        productList: [
            { id: 1, productName: "laptop", count: 3 },
            { id: 2, productName: "phone", count: 5 },
            { id: 3, productName: "tablet", count: 4 },
        ],
    };

    // for delete product i will passed to Product Component there call it 
    handleDelete = (productId) => {
        const newProducts = this.state.productList.filter((product) => {
            return product.id !== productId;
        });
        this.setState({ productList: newProducts });
    };



    render() {
        return (
            <div>
                <button className="m-2 p-5 bg-primary">reset</button>
                {this.state.productList.map((product) => {
                    return (
                        <Product
                            id={product.id}
                            key={product.id}
                            productName={product.productName}
                            count={product.count}
                            onDelete={this.handleDelete} />
                    );
                })}
            </div>
        );
    }
}
