import React, { Component } from "react";
import Product from "./Product";


export default class ShoppingCart extends Component {

    constructor(){
        super();
        this.state = {
            products: [
                { id: 1, productName: "iPhone", price: 8900, quantity: 0 },
                { id: 2, productName: "Sony Camera", price: 4500, quantity: 0 },
                { id: 3, productName: "Samsung QLED TV", price: 7745, quantity: 0 },
                { id: 4, productName: "iPad Pro", price: 12400, quantity: 0 },
                { id: 5, productName: "Xbox", price: 7780, quantity: 0 },
                { id: 6, productName: "Dell laptop", price: 880, quantity: 0 }
            ]
        }
    }

    
    render() {
        return <div className="container-fluid">
            <h4>Shopping Cart</h4>
            <div className="row">{this.state.products.map((prod) => {
                return <Product key={prod.id} id={prod.id} product={prod} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}>
                    <button className="btn btn-primary">Buy Now</button>
                </Product>
            })}</div>
        </div>
    }


    

    handleIncrement = (product, maxvalue) => {
        console.log("handle increment", product)
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(product)
        if (allProducts[index].quantity < maxvalue) {
            allProducts[index].quantity++;

            this.setState({ products: allProducts })
        }


    }

    handleDecrement = (product, minvalue) => {
        console.log("handle Decrement", product)
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(product)
        if (allProducts[index].quantity > minvalue) {
            allProducts[index].quantity--;

            this.setState({ products: allProducts })

        }


    }

    handleDelete = (product) => {
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(product);
        if (window.confirm("Are you sure you want to delete?")) {
            allProducts.splice(index, 1);
            this.setState({ products: allProducts })
        }

    }
}