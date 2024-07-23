import React, { useState } from "react";

export const contextCart = React.createContext();

const Cart = ({ children }) => {

    const [cart, setCart] = useState(0);

    return (
        <>
            <div>
                <center>
                    <contextCart.Provider value={[cart, setCart]}>
                        {children}
                    </contextCart.Provider>
                </center>
            </div>
        </>
    )
}

export default Cart;