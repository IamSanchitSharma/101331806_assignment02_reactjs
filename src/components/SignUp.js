import React, {useState} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useForm } from "react-hook-form";

export default function SignUp() {

    const notifySuccess = () => toast("User Signed-Up Successfully!")

    const notifyError = () => toast.warn('Please check again!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    
    const notifyErrorUsername = () => toast.error('Username cannot be empty', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;

        const notifyErrorPassword = () => toast.error('Password cannot be empty', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });;
            
        const notifyErrorEmail = () => toast.error('Email cannot be empty', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });;
    
        const notifyErrorEmailFormat = () => toast.error('Email format is incorrect', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })

    const {register,handleSubmit} = useForm();

    const navigate = useNavigate();
    
    const base_url = 'https://assignment02-101331806-deploy.herokuapp.com/api/user/signup';
    
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        user:[]
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setUser({...user, [name]: value})
    }

    const onSubmit = (e) => {
      e.preventDefault();
      
      const newUser = {
          username: user.username,
          password: user.password,
          email: user.email
      }

      if (newUser.username.length <= 0 || newUser.password.length <= 0 || newUser.email.length <= 0) {
        if (newUser.username.length <= 0) {
            notifyErrorUsername();
        }
        if (newUser.password.length <= 0) {
            notifyErrorPassword();
        }
        if (newUser.email.length <= 0) {
            notifyErrorEmail();
        }
    } else if (!newUser.email.includes('@')) {
        notifyErrorEmailFormat();
        } 
    else {
        axios.post(base_url, newUser)
        .then(res => {
            notifySuccess();
            navigate('/login');
        })
        .catch(err => {
            notifyError()
        })
    }
  }
  return (
    <div>
        <div style={{marginTop:"20px", marginBottom:"20px", padding:"50px"}} className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:"#cccccc", padding:"30px"}}>
                <h3 className="text-center">New User Signup</h3>
                <br></br>
                <div className="card-body">
                    <form onSubmit={e => handleSubmit(onSubmit(e))}>
                        <div className="form-group d-block">
                            <label>Username: </label>
                            <input type='text' className="form-control" name="username" placeholder="Enter a username"
                            {...register("username", { required: true })}
                            onChange={e => handleInputChange(e)}/>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Password: </label>
                            <input type='password'  className="form-control" name="password" placeholder="Enter a password"
                            {...register("password", { required: true })}
                            onChange={e => handleInputChange(e)}/>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Email Id: </label>
                            <input type='email' className="form-control" name="email" placeholder="Enter an email address"
                            {...register("email", { required: true })}
                            onChange={e => handleInputChange(e)}/>
                        </div>
                        <br></br>
                        <Button variant="success" onSubmit={handleSubmit(onSubmit)} type='submit'>Submit</Button>
                            &nbsp;&nbsp;&nbsp;   
                        <Link to={"/login"}><Button style={{marginRight:35}} className="btn btn-primary" >LogIn</Button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
        <ToastContainer 
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
);
}