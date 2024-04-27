import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <div className="div mt-5">
          <div className="card w-96 glass text-white">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life Hack</h2>
    <h3>Subcategory: Car Parking</h3>
    <p><strong>Price:</strong> $9.99</p>
    <p><strong>Rating:</strong> 4.5/5</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-red-600">View Details</button>
    </div>
  </div>
</div>

        </div>
        </div>
    );
};

export default Home;