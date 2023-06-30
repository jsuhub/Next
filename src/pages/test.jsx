import React, { Fragment, useContext } from 'react';
import { Context } from '@/state/Context';
import Nav from '@/components/Nav/Nav';

function MyComponent() {


    const { isLoggedIn, login, logout } = useContext(Context);

    console.log(isLoggedIn)

    const handleLogin = () => {
        login();
        console.log(isLoggedIn)
    };

    const handleLogout = () => {
        logout();
        console.log(isLoggedIn)
    };

    return (
        <Fragment>
            <Nav></Nav>
            <div style={{
                margin: "200px"
            }}>
                {isLoggedIn
                    ? (
                        <button onClick={handleLogout}>Logout</button>
                    )
                    : (
                        <button onClick={handleLogin}>Login</button>
                    )}
            </div>
        </Fragment>
    );
}

export default MyComponent;
