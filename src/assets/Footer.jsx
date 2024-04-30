import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-xl font-semibold"><span className='text-red-600'>Fine</span> Art</p>
        <p className="mt-2">Explore the beauty of drawing and painting</p>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Gallery</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Instagram</a>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Fine Art. All rights reserved.</p>
      </div>
    </footer>
    );
};

export default Footer;