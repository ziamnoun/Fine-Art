// import { onAuthStateChanged } from 'firebase/auth';
// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import auth from '../../firebase/firebase.config';

// const MyPaintingAndDrawing = () => {
//     const AllCraftItem=useLoaderData();
//     const [user,setUser]=useState(null)
   

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
//     // const filteredItems = AllCraftItem.filter(item => item.email === user.email);
//     console.log(AllCraftItem);
//     // console.log(filteredItems)
//     console.log(user)
   




//     return (
//         <div>
            
//         </div>
//     );
// };

// export default MyPaintingAndDrawing;
import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

const MyPaintingAndDrawing = () => {
    const AllCraftItem = useLoaderData();
    const [user, setUser] = useState(null);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        console.log("AllCraftItem:", AllCraftItem);
    }, [AllCraftItem]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        console.log("User:", user);

        if (user) {
            const filtered = AllCraftItem.filter(item => item.userEmail === user.email);
            console.log(filtered);
            setFilteredItems(filtered);
        } else {
            setFilteredItems([]);
        }
    }, [user, AllCraftItem]);

    console.log("FilteredItems:", filteredItems);

    return (
        <div>
            {filteredItems.map(item => (
                <div key={item._id}>
                    <img src={item.imageURL} alt={item.itemName} />
                    <h2>{item.itemName}</h2>
                    <p>{item.shortDescription}</p>
                </div>
            ))}
        </div>
    );
};

export default MyPaintingAndDrawing;
