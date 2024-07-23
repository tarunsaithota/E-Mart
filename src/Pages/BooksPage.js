import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { booksData } from "../data/books";

const BooksPage = () => {
    return (
        <>
            <Navbar />
            <div className="row">
                {booksData.map(
                    (data) =>
                        <div className="col-md-4"> <br />
                            <div className="card">
                                <Link to={`/${data.id}`}>
                                    <img src={data.image} alt={data.id} />
                                </Link>
                                <div className="card-body">
                                    <p className="card-text">{data.title}</p>
                                    <p className="card-text">{data.author}</p>
                                </div>
                            </div>
                        </div>
                )}
            </div>
        </>
    )
}

export default BooksPage;