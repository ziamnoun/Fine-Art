import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
  const craftData=useLoaderData();
  console.log(craftData);
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
   
    
  }=craftData;


  const handleUpdateCraft=event=>{
    event.preventDefault()
    const form = event.target;
    const imageURL = form.image.value;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;




    const craftData = {
      imageURL,
      itemName,
      subcategoryName,
      shortDescription,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
     
      
    };
    console.log(craftData)
    fetch(`http://localhost:5000/data/${_id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(craftData)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      toast.success("Successfully Updated!");
      // if(data.modifiedCount>0){
      //   toast.success("Successfully Updated!");
      // }
     
    })
    .catch(error => {
      console.error("Error:", error);
      toast.error("An error occurred while updating the craft.");
    });


  };
  console.log(craftData.itemName)






 





    return (
        <div className="min-h-screen flex items-center justify-center  mt-10">
        <div className="max-w-md w-full px-6 py-8 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Update Craft Item:{craftData.itemName}</h2>
          <form onSubmit={handleUpdateCraft}>
            <div className="mb-4">
              <label htmlFor="image" className="block text-white mb-2">Image URL</label>
              <input defaultValue={craftData.imageURL} type="text" id="image" name="image" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="itemName" className="block text-white mb-2">Item Name</label>
              <input defaultValue={craftData.itemName} type="text" id="itemName" name="itemName" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="subcategoryName" className="block text-white mb-2">Subcategory Name</label>
              <input defaultValue={craftData.subcategoryName} type="text" id="subcategoryName" name="subcategoryName" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="shortDescription" className="block text-white mb-2">Short Description</label>
              <textarea defaultValue={craftData.shortDescription} id="shortDescription" name="shortDescription" rows="3" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-white mb-2">Price</label>
              <input defaultValue={craftData.price} type="text" id="price" name="price" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-white mb-2">Rating</label>
              <input defaultValue={craftData.rating} type="text" id="rating" name="rating" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="customization" className="block text-white mb-2">Customization</label>
              <select defaultValue={craftData.customization} id="customization" name="customization" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="processingTime" className="block text-white mb-2">Processing Time</label>
              <input defaultValue={craftData.processingTime} type="text" id="processingTime" name="processingTime" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="stockStatus" className="block text-white mb-2">Stock Status</label>
              <select defaultValue={craftData.stockStatus} id="stockStatus" name="stockStatus" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                <option value="inStock">In Stock</option>
                <option value="madeToOrder">Made to Order</option>
              </select>
            </div>
            <div className="mb-6">
              <button type="submit" className="w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update</button>
            </div>
          </form>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default Update;