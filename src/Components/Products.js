import React from "react";
import Books from "./Books";
import Computers from "./Computers";
import Fridge from "./Fridge";
import Furniture from "./Furniture";
import Kitchen from "./Kitchen";
import Men from "./Men";
import Mobiles from "./Mobiles";

const Products = () => {
    return (
        <>
            <div>
                <Mobiles />
                <Computers />
                <Furniture />
                <Books />
                <Fridge />
                <Kitchen />
                <Men />
            </div>
        </>
    )
}

export default Products;