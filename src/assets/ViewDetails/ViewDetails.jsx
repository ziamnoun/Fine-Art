import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItemDetails();
  }, []);

  const fetchItemDetails = async () => {
    try {
      const response = await fetch(`https://drawing-painting-server.vercel.app/data/${id}`);
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  console.log(item)

  return (
    <div className="text-white">
      
      {item ? (
     <div className="card bg-gradient-to-b from-black to-purple-800 lg:card-side min-h-screen shadow-xl ">
     <figure>
       <img src={item.imageURL} alt={item.itemName} />
     </figure>
     <div className="card-body">
       <h2 className="card-title">{item.itemName}</h2>
       <p>Category: {item.subcategoryName}</p>
       <p>Description: {item.shortDescription}</p>
       <p>Price: {item.price}</p>
       <p>Rating: {item.rating}</p>
       <p>Customization: {item.customization}</p>
       <p>Processing Time: {item.processingTime}</p>
       <p>Stock Status: {item.stockStatus}</p>
       
       <div className="card-actions justify-end">
         <button className="btn btn-primary bg-red-600">Buy Now</button>
       </div>
     </div>
   </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewDetails;
