import React from 'react';
import {BrowserRouter, Redirect, Link} from 'react-router-dom';

const Nav = () =>{
    
    return(
        <>
            <BrowserRouter>
            <div className="bg-success mb-5">
                <ul className="nav justify-content-center">
                    <li className="nav-link active text-dark"><a href="/home"> Home</a></li> 
                    <li className="nav-link active"> <a href="/login"> Login</a></li>
                    <li className="nav-link active"> <a href="/search"> Search</a></li>
                </ul>
            </div>
            </BrowserRouter>
        </>
    );
}

export default Nav;