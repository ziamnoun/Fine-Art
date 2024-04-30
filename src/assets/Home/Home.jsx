import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Blog from '../Blog';

const Home = () => {
  const AllCraftItem=useLoaderData();
  const  {
    _id,
    imageURL,
    itemName,
    subcategoryName,
    shortDescription,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
   
    
  }=AllCraftItem;


  const handleDelete=(_id)=>{
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/data/${_id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.deletedCount>0){
            Swal.fire({
          
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            })
            .then(() => {
             
              window.location.reload();
            });

          }
        })
       
      }
    });

  }
  



    return (
        <div>
          <Banner></Banner> 

          <div className="flex justify-center items-center mt-10">
      <div className="text-center text-white">
      <p className="text-lg">Explore our curated collection of Drawing and Painting</p>
        <h1 className="text-xl font-bold mb-4">Unleash your imagination with our diverse collection of drawing and painting supplies, curated to fuel your artistic passion and bring your visions to life.</h1>
        <p className="text-lg">Check below for more:</p>
      </div>
    </div>




          <div className="div mt-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3 mx-auto md:w-[80%]">
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
               <NavLink to={`/ViewDetails/${item._id}`}> <button className="btn btn-primary bg-red-600">View Details</button></NavLink>
               <NavLink to={`/Update/${item._id}`}> <button className="btn btn-primary bg-red-600">Update Craft</button></NavLink>
               <button onClick={()=>handleDelete(item._id)} className="btn btn-primary bg-red-600">Delete</button>
              </div>
            </div>
          </div>
          ))
         }

        </div>
        <Blog></Blog>
        </div>
     
    );
};

export default Home;