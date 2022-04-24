import React from "react";
import './Products.css'
import SingleProduct from './SingleProduct'
import {productsItem} from './mock/products'

const productList = productsItem.map((Element)=> <SingleProduct object={Element} />)

const Products = (props) => {
    console.log(props)
    return(
        <div>
            <section className="newProducts">
                <h1>News Products</h1>
                <div className="newProducts__container">
                    {productList}
                    {productList}
                </div>
            </section>
        </div>
    )
}

export default Products