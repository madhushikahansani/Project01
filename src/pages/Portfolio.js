import React from "react";
import ProductCard from "../components/product/ProductCard";
import ProductList from "../components/product/ProductList";
import ProductCart from "../components/product/ProductCart";
class Portfolio extends React.Component{
    render(){
        return(
            <div>
                <h3>This is Portfolio Page</h3>
                <ProductList title="Related Products" totalItems="4"/>
                
            </div>
        )
    }
}
export default Portfolio;