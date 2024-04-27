import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const AllCraftItem=useLoaderData();



    return (
        <div>
          <Banner></Banner> 
          <div className="div mt-5 grid md:grid-cols-3 grid-cols-1 gap-3 mx-auto md:w-[80%]">
         {
          AllCraftItem.map(item=>(
            <div className="card w-96 glass bg-black text-white">
            <figure><img src={item.imageURL} alt="car!"/></figure>
            <div className="card-body">
              <h2 className="card-title">{item.itemName}</h2>
              <h3>Subcategory: {item.subcategoryName}</h3>
              <p><strong>Price:</strong> {item.price}</p>
              <p><strong>Rating:</strong>{item.rating}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-red-600">View Details</button>
              </div>
            </div>
          </div>
          ))
         }

        </div>
        </div>
    );
};

export default Home;