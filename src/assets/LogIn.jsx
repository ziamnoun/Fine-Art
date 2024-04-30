import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import auth from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const LogIn = () => {
  const [user,setUser]=useState(null);
  const googleProvider=new GoogleAuthProvider()
  const githubProvider=new GithubAuthProvider()





  const handleGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        toast.success('Login Successful');
        setUser(result.user);
      })
      .catch(error => {
        toast.error('Failed to Sign In');
      });
  };
  const handleGithubLogIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        toast.success('Login Successful');
        setUser(result.user);
      })
      .catch(error => {
        toast.error('Failed to Sign In');
      });
  };


  const handleLogIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  signInWithEmailAndPassword(auth,email,password)
      .then(result => {
        console.log(result.user);
        toast.success('Login successful');
        setUser(result.user)

      })
      .catch(error => {
        console.error(error);
        toast.error('Invalid email or password');
      });
  };





    return (
        <div className="min-h-screen flex items-center justify-center ">
        <div className="max-w-md w-full px-6 py-8 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-8">Log In</h2>
          <form onSubmit={handleLogIn}>
          <div className="mb-4">
              <label htmlFor="username" className="block text-white mb-2">Username</label>
              <input type="text" id="username" name="username" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white mb-2">Password</label>
              <input type="password" id="password" name="password" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            
            <div className="mb-6">
              <button type="submit" className="w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Log In</button>
            </div>
            <div className="flex items-center justify-between">
              <button onClick={handleGoogleLogIn} type="button" className="px-4 py-2 btn btn-warning rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"><FaGoogle />Login with Google</button>
              <button onClick={handleGithubLogIn} type="button" className="px-4 py-2 text-white btn btn-active btn-neutral hover:bg-red-600 focus:outline-none focus:bg-red-600"><FaGithub />Login with GitHub</button>
            </div>
          </form>
          <p className="text-center text-white mt-2">
            Don't have an account? <NavLink to="/Register" className="underline">Register Now</NavLink>
          </p>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default LogIn;