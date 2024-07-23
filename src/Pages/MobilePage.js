import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { mobileData } from "../data/mobiles";

const MobilePage = () => {
    return (
        <>
            <Navbar />
            <div className="row">
                {mobileData.map(
                    (data) =>
                        <div className="col-md-4"> <br />
                            <div className="card">
                                <Link to={`/${data.id}`}>
                                    <img src={data.image} alt={data.id} />
                                </Link>
                                <div className="card-body">
                                    <p className="card-text">{data.company}</p>
                                    <p className="card-text">{data.model}</p>
                                </div>
                            </div>
                        </div>
                )}
            </div>
        </>
    )
}

export default MobilePage;