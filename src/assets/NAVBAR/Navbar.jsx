import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase/firebase.config';
;

const Navbar = () => {
  const links=<>
  <li><NavLink to='/' className={({isActive})=> isActive?  'border-solid border-2 border-black  text-white bg-red-600 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-600 hover:text-white' :'text-white border-2 border-red-600'}>Home</NavLink></li>
  <li><NavLink to='/AddCraftItem' className={({isActive})=> isActive?  'border-solid border-2 border-black text-white bg-red-600 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-600 hover:text-white' :'text-white border-2 border-red-600'}>Add Craft Item</NavLink></li>
  <li><NavLink to='/AllPaintingAndDrawing' className={({isActive})=> isActive?  ' border-solid border-2 border-black text-white bg-red-600 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-600 hover:text-white' :'text-white border-2 border-red-600'}>All Drawing and Painting Items</NavLink></li>
  <li><NavLink to='/ViewDetails' className={({isActive})=> isActive?  ' border-solid border-2 border-black text-white bg-red-600 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-600 hover:text-white' :'text-white border-2 border-red-600'}>View Details Page</NavLink></li>
  <li><NavLink to='/MyPaintingAndDrawing' className={({isActive})=> isActive?  ' border-solid border-2 border-black text-white bg-red-600 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-600 hover:text-white' :'text-white border-2 border-red-600'}>My Art List</NavLink></li>
  <li><NavLink to='/Update' className={({isActive})=> isActive?  ' border-solid border-2 border-black text-white bg-red-600 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-gray-600 hover:text-white' :'text-white border-2 border-red-600'}>Update</NavLink></li>
 
 </>
 const [user,setuser]=useState(null);
 onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    setuser(user)
    // ...
  } else {
    // User is signed out
    // ...
  }
});
console.log(user);


const handleLogOut = () => {
  return signOut(auth)
    .then((result) => {
      setuser(result)
      console.log('User logged out successfully');
    })
    .catch(error => {
      console.error(error);
    });
};










    return (
        <div className="navbar bg-gradient-to-b from-black to-purple-800">
        <div className="navbar-start">
          <div className="dropdown bg-purple-600">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[4] p-2 shadow  rounded-box w-52 bg-red-600">
            {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl text-red-600">Fine <span className='text-white'>ART</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
          {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
        {
      user && <span>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="image" className='border-2  bg-white' src={user.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-[5]">
        
        <li><NavLink to="/UserProfile">{user.displayName}</NavLink></li>
        <li><a onClick={handleLogOut}>Log out</a></li>
      </ul>
    </div>
     
    
      
      </span>
      
    }
     {!user && (
        <>
           <NavLink to="/LogIn"><a className="btn border-2 text-red-600 border-red-600 bg-black">Log In</a></NavLink>
      <NavLink to="/Register"><a className="btn bg-red-600 text-white border-2 border-black">Register</a></NavLink>
        </>
      )}
          
      {/* <NavLink to="/LogIn"><a className="btn border-2 text-red-600 border-red-600 bg-black">Log In</a></NavLink>
      <NavLink to="/Register"><a className="btn bg-red-600 text-white border-2 border-black">Register</a></NavLink> */}
        </div>
      </div>
    );
};

export default Navbar;