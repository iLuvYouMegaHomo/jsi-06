import React from "react";
import './Products.css'

const SingleProduct = (props) => {
    return(
            <div className="newProducts__item">
                        <div className="item__image">
                            <img src={props.object.image} alt="p6"/>
                            <div className="item__image-child">
                                <img src={props.object.image} alt="p5"/>
                            </div>
                        </div>
                        <div className="item__content">
                            <h3>{props.object.productName}</h3>
                            <p><strong>XL/XXL/S</strong></p>
                            <div className="item__text">
                                <p><del>{props.object.oldPrice}</del></p>
                                <p><strong>{props.object.newPrice}</strong></p>
                            </div>
                            <button>Add To Cart</button>
                        </div>
                    </div>

    )
}

export default SingleProduct