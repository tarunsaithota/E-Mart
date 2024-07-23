import React from 'react';
import { Link } from 'react-router-dom';
import SpaceBetween from "@cloudscape-design/components/space-between";

const LoginNavbar = () => {
    return (
        <>
            <div className='loginNavbar'>
                <div className='nav-title'>
                    <Link to='/' exact style={{"textDecoration":"none"}}>
                        <h2>E-Mart</h2>
                    </Link>
                </div>
                <div className='loginNavMenu'>
                    <ul>
                        <SpaceBetween direction="horizontal" size="xxl">
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Demo</li>
                            <li>Help</li>
                        </SpaceBetween>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default LoginNavbar;
