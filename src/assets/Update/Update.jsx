import React from 'react';

const Update = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  mt-10">
        <div className="max-w-md w-full px-6 py-8 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Update Craft Item</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="image" className="block text-white mb-2">Image URL</label>
              <input type="text" id="image" name="image" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="itemName" className="block text-white mb-2">Item Name</label>
              <input type="text" id="itemName" name="itemName" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="subcategoryName" className="block text-white mb-2">Subcategory Name</label>
              <input type="text" id="subcategoryName" name="subcategoryName" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="shortDescription" className="block text-white mb-2">Short Description</label>
              <textarea id="shortDescription" name="shortDescription" rows="3" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-white mb-2">Price</label>
              <input type="text" id="price" name="price" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-white mb-2">Rating</label>
              <input type="text" id="rating" name="rating" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="customization" className="block text-white mb-2">Customization</label>
              <select id="customization" name="customization" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="processingTime" className="block text-white mb-2">Processing Time</label>
              <input type="text" id="processingTime" name="processingTime" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="stockStatus" className="block text-white mb-2">Stock Status</label>
              <select id="stockStatus" name="stockStatus" className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                <option value="inStock">In Stock</option>
                <option value="madeToOrder">Made to Order</option>
              </select>
            </div>
            <div className="mb-6">
              <button type="submit" className="w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Update;