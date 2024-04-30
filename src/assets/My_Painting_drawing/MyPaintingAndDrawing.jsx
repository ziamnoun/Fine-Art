// import { onAuthStateChanged } from 'firebase/auth';
// import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import auth from '../../firebase/firebase.config';

// const MyPaintingAndDrawing = () => {
//     const AllCraftItem=useLoaderData();
//     const [artsAndCrafts, setArtsAndCrafts] = useState([]);
//     const [filter, setFilter] = useState('All');
//     const [user,setUser]=useState(null);
    


   
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     setUser(user)
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

// console.log(user)
// console.log(AllCraftItem)


// useEffect(() => {
//     if (user && AllCraftItem.length > 0) {
//         const filteredItems = AllCraftItem.filter(item => item.email === user.email);
//         setArtsAndCrafts(filteredItems);
//     }
// }, [AllCraftItem, user]);
// console.log(artsAndCrafts)


// const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//     const filteredItems = AllCraftItem.filter(item => item.email === user.email && item.email.includes(e.target.value));
//     setArtsAndCrafts(filteredItems);
// };



//     return (
//         <div className="container mx-auto px-4 py-8">
//         <div className="mb-4">
//             <label htmlFor="filter" className="mr-2">Filter by Email:</label>
//             <input
//                 id="filter"
//                 type="text"
//                 value={filter}
//                 onChange={handleFilterChange}
//                 className="px-4 py-2 border rounded"
//             />
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {artsAndCrafts.map(item => (
//                 <div key={item.id} className="border p-4 rounded">
//                     <img src={item.image} alt={item.item_name} className="mb-4 w-full h-auto" />
//                     <h3 className="text-lg font-semibold">{item.item_name}</h3>
//                     <p className="text-gray-600 mb-2">Price: ${item.price}</p>
//                     <p className="text-gray-600 mb-2">Rating: {item.rating}</p>
//                     <p className="text-gray-600 mb-2">Customization: {item.customization}</p>
//                     <p className="text-gray-600 mb-2">Stock Status: {item.stockStatus}</p>
//                     <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Update</button>
//                     <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
//                 </div>
//             ))}
//         </div>
//     </div>
//     );
// };

// export default MyPaintingAndDrawing;


import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import auth from '../../firebase/firebase.config';

const MyPaintingAndDrawing = () => {
    const AllCraftItem = useLoaderData();
    const [artsAndCrafts, setArtsAndCrafts] = useState([]);
    const [filter, setFilter] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
              
                setUser(authUser);
            } else {
               
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user && AllCraftItem.length > 0) {
            const filteredItems = AllCraftItem.filter(item => item.email === user.email);
            setArtsAndCrafts(filteredItems);
        }
    }, [AllCraftItem, user]);
    console.log(artsAndCrafts)

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        const filteredItems = AllCraftItem.filter(item => item.email === user.email && item.item_name.includes(e.target.value));
        setArtsAndCrafts(filteredItems);
    };

    if (!user) {
        return <p>Please sign in to view your arts and crafts.</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-4">
                <label htmlFor="filter" className="mr-2 text-red-600">Filter by Item Name:</label>
                <input
                    id="filter"
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                    className="px-4 py-2 border rounded"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {artsAndCrafts.map(item => (
                    <div key={item.id} className="border p-4 rounded">
                        <img src={item.image} alt={item.item_name} className="mb-4 w-full h-auto" />
                        <h3 className="text-lg font-semibold">{item.item_name}</h3>
                        <p className="text-gray-600 mb-2">Price: ${item.price}</p>
                        <p className="text-gray-600 mb-2">Rating: {item.rating}</p>
                        <p className="text-gray-600 mb-2">Customization: {item.customization}</p>
                        <p className="text-gray-600 mb-2">Stock Status: {item.stockStatus}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Update</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyPaintingAndDrawing;
