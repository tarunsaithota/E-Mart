import React from "react";
import { furnitureData } from "../data/furniture";

const Furniture = () => {

    const finalList = furnitureData.slice(0, 5);
    return (
        <>
            <div className="productTitle">
                <h2>Furnitures</h2>
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

export default Furniture;