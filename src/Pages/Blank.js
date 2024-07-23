import React from 'react';
import SpaceBetween from "@cloudscape-design/components/space-between";
import Box from "@cloudscape-design/components/box";
import LoginNavbar from "../Components/LoginNavbar";
import Login from "./Login";
import login from '../../src/login.jpeg'

const Blank = () => {
    return (
        <>
        <LoginNavbar/>
            <div class="flex-container">
                <div className="flex-item-1" style={{ backgroundImage: `url(${login})` }}>
                    
                </div>
                <div className="flex-item-2">
                    <SpaceBetween direction="vertical" size="l">
                        <SpaceBetween direction="vertical" size="xxs">
                            <Box>
                                <h2>Login form</h2>
                            </Box>
                            <Box variant="small">Please enter below details to login</Box>
                        </SpaceBetween>

                        <Box variant="p">
                            <Login />
                        </Box>
                    </SpaceBetween>
                </div>
            </div>
        </>
    )
}

export default Blank;