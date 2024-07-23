import React from "react";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Box from "@cloudscape-design/components/box";
import LoginNavbar from "../Components/LoginNavbar";
import Login from "./Login";
import login from '../../src/login.jpeg'

const LoginSignUp = () => {
    return (
        <>
            <LoginNavbar />
            <Container
                    // media={{
                    //     content: (
                    //         <img
                    //             src={login}
                    //             alt="placeholder"
                    //         //src=''
                    //         />
                    //     ),
                    //     position: "absolute",
                    //     // width: "63%",
                    // }}
            >
                <center>
                    <div className="right-container">
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
                </center>
            </Container>
        </>
    )
}

export default LoginSignUp;

