import React from "react";
import { fridgeData } from "../data//fridge";

const Fridge = () => {

    const finalList = fridgeData.slice(0, 5);
    return (
        <>
            <div className="productTitle">
                <h2>Fridges</h2>
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

export default Fridge;