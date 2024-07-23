import React from "react";
import { computerData } from "../data/computers";
import { Link } from "react-router-dom";

const Computers = () => {

    const finalList = computerData.slice(0, 5);
    return (
        <>
            <div className="productTitle">
                <h2>Computers</h2>
            </div>
            <div className="productsSection">
                {finalList.map(
                    (mobiles) =>
                        <div className='productImageBox' key={mobiles.id}>
                            <Link to='/computerspage'><img
                                className="productImage"
                                src={mobiles.image} alt={mobiles.model}
                            /></Link>
                        </div>
                )}
            </div>
        </>
    )
}

export default Computers;