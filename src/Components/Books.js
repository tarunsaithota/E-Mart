import React from "react";
import { booksData } from "../data/books";
import { Link } from "react-router-dom";

const Books = () => {

    const finalList = booksData.slice(0, 5);
    return (
        <>
            <div className="productTitle">
                <h2>Books</h2>
            </div>
            <div className="productsSection">
                {finalList.map(
                    (mobiles) =>
                        <div className='productImageBox' key={mobiles.id}>
                            <Link to='/bookspage'><img
                                className="productImage"
                                src={mobiles.image} alt={mobiles.model}
                            /></Link>
                            
                        </div>
                )}
            </div>
        </>
    )
}

export default Books;