import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { NavLink } from 'react-router-dom';
import auth from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const Register = () => {
  
  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value; 
    console.log(email, password);
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
  
   
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
  
  
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
  
  
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        toast.success('Registration successful');
      })
      .catch(error => {
        console.error(error);
        toast.error('Register error')
      });
  };





    return (
        <div className="min-h-screen flex items-center justify-center ">
        <div className="max-w-md w-full px-6 py-8 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-8">Register</h2>
          <form onSubmit={handleRegister}>
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
              <button type="submit" className="w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Register</button>
            </div>
          </form>
          <p className="text-center text-white mt-2">
            Already have an account? <NavLink to="/LogIn" className="underline">Log In</NavLink>
          </p>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default Register;