import React, {useEffect, useState} from 'react';
import images from '../Assets/images.js';
import Home from '../Components/Home.js';
import {Redirect} from 'react-router-dom';

import {getToken} from '../Application/Api';

const Form = () =>{

//Consts
    const [user, setUser] = useState({
        email:'',
        password:'',
        auth: false
    });
    

//Save the variables
    const handleChange = e =>{
        setUser((prevProps)=>({
            ...prevProps, [e.target.name] : e.target.value,
        }))
    }
    
//Clean the text area
    const cleanForm = () =>{
        setUser({email:'', password:''});
    }

//Validations
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(user.email);
        if(user.email === '' || user.password === ''){
            alert('All fields are required');
            cleanForm();
            return;
        }else{
            if(user.email !== 'challenge@alkemy.org' || user.password !== 'react'){
                alert('Incorrect fields');
                cleanForm();
                return;
            }else{
                alert('Welcome Alkemy!');
                getToken(user.email, user.password);
                setUser({auth: true});
                return;
            }
        }
    }


    return(
        <>
        {user.auth ? <Redirect to='/home' /> : null}
            <form className="container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control mb-3" id="email" name="email" value={user.email} onChange={handleChange}  aria-describedby="emailHelp" placeholder="Enter email"></input>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control mb-3" id="password" name="password" value={user.password} onChange={handleChange} placeholder="Password"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            
            
        </>
    );
}

export default Form;