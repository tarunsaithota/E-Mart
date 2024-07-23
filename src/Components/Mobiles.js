import React from "react";
import { mobileData } from "../data/mobiles";
import { Link } from "react-router-dom";

const Mobiles = () => {

    const finalList = mobileData.slice(0, 5);
    return (
        <>
            <div className="productTitle">
                <h2>Mobiles</h2>
            </div>
            <div className="productsSection">
                {finalList.map(
                    (mobiles) =>
                        <div className='productImageBox' key={mobiles.id}>
                            <Link to='/mobilepage'><img
                                className="productImage"
                                src={mobiles.image} alt={mobiles.model}
                            /></Link>
                        </div>
                )}
            </div>
        </>
    )
}

export default Mobiles;