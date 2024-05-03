
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllPaintingAndDrawing = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchAllItems();
  }, []);

  const fetchAllItems = async () => {
    try {
      const response = await fetch('https://drawing-painting-server.vercel.app/AllPaintingAndDrawing');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='text-white'>
    <h1>All Art & Craft Items</h1>
    <table className="table">
      <thead>
        <tr className='text-red-600'>
          <th>Item Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item._id}>
            <td>{item.itemName}</td>
            <td>{item.subcategoryName}</td>
            <td>{item.price}</td>
            <td>
              <Link to={`/ViewDetails/${item._id}`} className="btn btn-primary bg-red-600">
                View Details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  
  );
};

export default AllPaintingAndDrawing;
