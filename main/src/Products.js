import React from "react";
import './Products.css'

const Products = () => {
    return(
        <div classNameName="">
            <section className="newProducts">
                <h1>News Products</h1>
                <div className="newProducts__container">
                    <div className="newProducts__item">
                        <div className="item__image">
                            <img src="./img/p6.jpg" alt="p6"/>
                            <div className="item__image-child">
                                <img src="./img/p5.jpg" alt="p5"/>
                            </div>
                        </div>
                        <div className="item__content">
                            <h3>My product is the best</h3>
                            <p><strong>XL/XXL/S</strong></p>
                            <div className="item__text">
                                <p><del>$100.000</del></p>
                                <p><strong>$70.000</strong></p>
                            </div>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                    <div className="newProducts__item">
                        <div className="item__image">
                            <img src="./img/p7.jpg" alt="p5"/>
                            <div className="item__image-child">
                                <img src="./img/p8.jpg" alt="p6"/>
                            </div>
                        </div>
                        <div className="item__content">
                            <h3>My product is the best</h3>
                            <p><strong>XL/XXL/S</strong></p>
                            <div className="item__text">
                                <p><del>$100.000</del></p>
                                <p><strong>$70.000</strong></p>
                            </div>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                    <div className="newProducts__item">
                        <div className="item__image">
                            <img src="./img/p9.jpg" alt="p5"/>
                            <div className="item__image-child">
                                <img src="./img/p10.jpg" alt="p6"/>
                            </div>
                        </div>
                        <div className="item__content">
                            <h3>My product is the best</h3>
                            <p><strong>XL/XXL/S</strong></p>
                            <div className="item__text">
                                <p><del>$100.000</del></p>
                                <p><strong>$70.000</strong></p>
                            </div>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                    <div className="newProducts__item">
                        <div className="item__image">
                            <img src="./img/p11.jpg" alt="p5"/>
                            <div className="item__image-child">
                                <img src="./img/p12.jpg" alt="p6"/>
                            </div>
                        </div>
                        <div className="item__content">
                            <h3>My product is the best</h3>
                            <p><strong>XL/XXL/S</strong></p>
                            <div className="item__text">
                                <p><del>$100.000</del></p>
                                <p><strong>$70.000</strong></p>
                            </div>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products