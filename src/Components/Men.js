import React from "react";
import { menData } from "../data/men";

const Men = () => {

    const finalList = menData.slice(0, 5);
    return (
        <>
            <div className="productTitle">
                <h2>Menswear</h2>
            </div>
            <div className="productsSection">
                {finalList.map(
                    (mobiles) =>
                        <div className='productImageBox' key={mobiles.id}>
                            <img
                                className="productImage"
                                src={mobiles.image} alt={mobiles.model}
                            >
                            </img>
                        </div>
                )}
            </div>
        </>
    )
}

export default Men;