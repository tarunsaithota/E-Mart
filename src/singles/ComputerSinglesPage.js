import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import { computerData } from "../data/computers";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import {contextCart} from "../Pages/Cart";

const ComputerSinglesPage = () => {
    
    const { computerID } = useParams()
    const product = computerData.find((items) => items.computerID === computerID)

    const[cart, setCart] = useContext(contextCart);

    const cartHandler = e => {
        e.preventDefault();
        setCart(cart + 1);
    }
    
    return (
        <>
            <Navbar />
            <div className="single-view">
                <div className="single-img">
                    <img src={product.image} alt='' />
                </div>
                <div className="img-details">
                    <div className="img-modal">
                        <h5> {product.model} </h5>
                    </div>
                    <div className="img-price">
                        <h5> {product.price} USD</h5>
                    </div>
                    <div className="img-desc">
                        <p>
                            {product.description} 
                        </p>
                    </div>
                    <div>
                        <Button variant="contained" onClick={cartHandler}>Add to cart</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComputerSinglesPage;