// import axios from 'axios';
// import{createContext, useEffect, useState} from 'react';
// //import { food_list } from '../Assests/assets';
// export const StoreContext=createContext(null);

// const StoreContextProvider=(props)=>{

//     const[cartItems,setCartItems]=useState({});
//     const url="http://localhost:4000";
//     const [token,setToken]=useState("");
//     const [food_list,setFoodList]=useState([])

//     // const addToCart=(itemId)=>{
//     //     if(!cartItems[itemId]){
//     //         setCartItems((prev)=>({...prev,[itemId]:1}))
//     //     }
//     //     else{
//     //         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//     //     }
//     // }
//     const removeFromCart=(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }

//     const addToCart = (itemId) => {
//         setCartItems((prev) => {
//             const newCartItems = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
//             console.log('Cart Items:', newCartItems); // Log cart items
//             return newCartItems;
//         });
//     };
    
    // const getTotoalCartAmount=()=>{
    //     let totalAmount=0;
    //     for(const item in cartItems){
    //         if(cartItems[item]>0){
    //             let itemInfo=food_list.find((product)=>product._id===item);
    //             totalAmount +=itemInfo.price*cartItems[item];
    //         }
    //     }
    //     return totalAmount;
    // }

    // function getTotoalCartAmount(cartItems) {
    //     if (!Array.isArray(cartItems)) {
    //         return 0;
    //     }
    
    //     return cartItems.reduce((total, item) => {
    //         // Ensure item is defined and has a price property
    //         if (item && typeof item.price === 'number') {
    //             return total + item.price;
    //         }
    //         return total;
    //     }, 0);
    // }
    //const getTotoalCartAmount = () => {
    //     return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
    //         const item = food_list.find((food) => food.id === parseInt(itemId));
    //         if (item && typeof item.price === 'number') {
    //             return total + item.price * quantity;
    //         }
    //         return total;
    //     }, 0);
    // };

    // const ferchFoodList=async()=>{
    //     const response=await axios.get(`${url}/api/food/list`);
    //     setFoodList(response.data.data)
    // }

    // useEffect(()=>{
    //     async function loadData(){
    //         await ferchFoodList()
    //         if(localStorage.getItem("token")){
    //             setToken(localStorage.getItem("token"));
    //         }
    //     }
    //     loadData();
    // },[])

   

    //   const fetchFoodList = async () => { // Renamed function to fetchFoodList
    //     try {
    //         const response = await axios.get(url + "/api/food/list");
    //         setFoodList(response.data.data);
    //     } catch (error) {
    //         console.error("Failed to fetch food list", error);
    //     }
    // };

//     useEffect(() => {
//         const loadData = async () => {
//             await ferchFoodList();
//             const storedToken = localStorage.getItem("token");
//             if (storedToken) {
//                 setToken(storedToken);
//             }
//         };
//         loadData();
//     }, []);

//     const contextValue={
//         food_list,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart,
//         getTotoalCartAmount,
//         url,
//         token,
//         setToken
//     }
//     return(
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

// export default StoreContextProvider;





// import axios from 'axios';
// import { createContext, useEffect, useState } from 'react';

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const url = "http://localhost:4000";
//   const [token, setToken] = useState("");
//   const [food_list, setFoodList] = useState([]);

//   // const addToCart = (itemId) => {
//   //   setCartItems((prev) => ({
//   //     ...prev,
//   //     [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
//   //   }));
//   // };
//   const addToCart = (itemId) => {
//     // Updated the state update logic
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
//     }));
//   };

//   // const removeFromCart = (itemId) => {
//   //   setCartItems((prev) => ({
//   //     ...prev,
//   //     [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0,
//   //   }));
//   // };

//   const removeFromCart = (itemId) => {
//     // Updated the state update logic
//     setCartItems((prev) => {
//       const newCartItems = { ...prev };
//       if (prev[itemId] > 1) {
//         newCartItems[itemId]--;
//       } else {
//         delete newCartItems[itemId];
//       }
//       return newCartItems;
//     });
//   };

//   const getTotoalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         console.log('Checking item:', item, 'Found itemInfo:', itemInfo); // Add this line
//         if (itemInfo && typeof itemInfo.price === 'number') {
//           totalAmount += itemInfo.price * cartItems[item];
//         } else {
//           console.warn(`Item with ID ${item} not found or price is invalid`);
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const ferchFoodList = async () => {
//     try {
//       const response = await axios.get(url + "/api/food/list");
//       setFoodList(response.data.data);
//     } catch (error) {
//       console.error("Failed to fetch food list", error);
//     }
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       await ferchFoodList();
//       const storedToken = localStorage.getItem("token");
//       if (storedToken) {
//         setToken(storedToken);
//       }
//     };
//     loadData();
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotoalCartAmount,
//     url,
//     token,
//     setToken,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;






// import axios from 'axios';
// import { createContext, useEffect, useState } from 'react';

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState({});
//     const url = "http://localhost:4000";
//     const [token, setToken] = useState("");
//     const [food_list, setFoodList] = useState([]);

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({
//             ...prev,
//             [itemId]: (prev[itemId] || 0) + 1,
//         }));
//     };

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => {
//             const newCartItems = { ...prev };
//             if (newCartItems[itemId] > 1) {
//                 newCartItems[itemId] -= 1;
//             } else {
//                 delete newCartItems[itemId];
//             }
//             return newCartItems;
//         });
//     };

//     const getTotalCartAmount = () => {
//         return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
//             const item = food_list.find((food) => food.id === parseInt(itemId));
//             if (item && typeof item.price === 'number') {
//                 return total + item.price * quantity;
//             }
//             return total;
//         }, 0);
//     };

//     const fetchFoodList = async () => {
//         const response = await axios.get(`${url}/api/food/list`);
//         setFoodList(response.data.data);
//     };

//     useEffect(() => {
//         async function loadData() {
//             await fetchFoodList();
//             const savedToken = localStorage.getItem("token");
//             if (savedToken) {
//                 setToken(savedToken);
//             }
//         }
//         loadData();
//     }, []);

//     const contextValue = {
//         food_list,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         url,
//         token,
//         setToken
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;







// import axios from 'axios';
// import { createContext, useEffect, useState } from 'react';

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState({});
//     const [foodList, setFoodList] = useState([]); // Initialized as an empty array
//     const [loading, setLoading] = useState(true);
//     const url = "http://localhost:4000";
//     const [token, setToken] = useState("");

//     const addToCart = (itemId) => {
//         setCartItems((prev) => {
//             const newCartItems = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
//             console.log('Added to Cart:', newCartItems);
//             return newCartItems;
//         });
//     };

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => {
//             const newCartItems = { ...prev };
//             if (newCartItems[itemId] > 1) {
//                 newCartItems[itemId] -= 1;
//             } else {
//                 delete newCartItems[itemId];
//             }
//             console.log('Removed from Cart:', newCartItems);
//             return newCartItems;
//         });
//     };

//     const getTotalCartAmount = () => {
//         console.log('Calculating total cart amount with:', cartItems, foodList);
//         return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
//             const item = foodList.find((food) => food.id === parseInt(itemId));
//             if (item && typeof item.price === 'number') {
//                 return total + item.price * quantity;
//             }
//             return total;
//         }, 0);
//     };

//     const fetchFoodList = async () => {
//         try {
//             const response = await axios.get(`${url}/api/food/list`);
//             setFoodList(response.data.data);
//             console.log('Fetched Food List:', response.data.data);
//         } catch (error) {
//             console.error('Error fetching food list:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         async function loadData() {
//             await fetchFoodList();
//             const savedToken = localStorage.getItem("token");
//             if (savedToken) {
//                 setToken(savedToken);
//             }
//         }
//         loadData();
//     }, []);

//     console.log('StoreContextProvider:', { foodList, cartItems, loading, token });

//     const contextValue = {
//         foodList,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         loading,
//         url,
//         token,
//         setToken
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;







import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [foodList, setFoodList] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");

    // const addToCart = (itemId) => {
    //     setCartItems((prev) => {
    //         const newCartItems = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
    //         return newCartItems;
    //     });
    // };

    const addToCart=async(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    // const removeFromCart = (itemId) => {
    //     setCartItems((prev) => {
    //         const newCartItems = { ...prev };
    //         if (newCartItems[itemId] > 1) {
    //             newCartItems[itemId] -= 1;
    //         } else {
    //             delete newCartItems[itemId];
    //         }
    //         return newCartItems;
    //     });
    // };

    const removeFromCart=async(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }



    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const itemId in cartItems) {
    //         if (cartItems[itemId] > 0) {
    //             const itemInfo = foodList.find((item) => item.id === parseInt(itemId));
    //             if (itemInfo) {
    //                 totalAmount += itemInfo.price * cartItems[itemId];
    //             }
    //         }
    //     }
    //     console.log('total amount : ',totalAmount);
    //     return totalAmount;
    // };

    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const itemId in cartItems) {
    //       if (cartItems[itemId] > 0) {
    //         const itemInfo = foodList.find((item) => item.id === parseInt(itemId));
    //         if (itemInfo) {
    //           console.log(`Item ${itemId}: quantity ${cartItems[itemId]}, price ${itemInfo.price}`); // Log item details
    //           totalAmount += (itemInfo.price || 0) * cartItems[itemId]; // Use default value if price is missing
    //         } else {
    //           console.error(`Item ${itemId} not found in food list`); // Log error for missing items
    //         }
    //       }
    //     }
    //     return totalAmount;
    //   };
      
    const getTotalCartAmount = () => {
        let totalAmount = 0;
      
        for (let i = 0; i < foodList.length; i++) {
          const item = foodList[i]; // Access item using index
          const quantity = cartItems[i] || 0; // Get quantity from cartItems, default to 0 if not found
      
          if (quantity > 0) {
            console.log(`Item ${item.id}: quantity ${quantity}, price ${item.price}`); // Log item details
            totalAmount += item.price * quantity;
            totalAmount = parseFloat(totalAmount.toFixed(2));
          }
        }
      
        return totalAmount;
      };

    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    
    //     for (let i = 0; i < foodList.length; i++) {
    //         const item = foodList[i]; // Access item using index
    //         const quantity = cartItems[item.id] || 0; // Get quantity from cartItems using item.id
    
    //         if (quantity > 0) {
    //             console.log(`Item ${item.id}: quantity ${quantity}, price ${item.price}`); // Log item details
    //             totalAmount += item.price * quantity;
    //         }
    //     }
    
    //     return totalAmount;
    // };

    // const getTotalCartAmount=()=>{
    //     let totalAmount=0;
    //     for(const item in cartItems){
    //         if(cartItems[item]>0){
    //             let itemInfo=foodList.find((produc)=>produc._id===item);
    //             totalAmount+=itemInfo.price*cartItems[item];
    //         }
    //     }
    //     return totalAmount;
    // }

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            setFoodList(response.data.data);
        } catch (error) {
            console.error('Error fetching food list:', error);
        } finally {
            setLoading(false);
        }
    };

    const loadCartData=async(token)=>{
        const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData);
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            const savedToken = localStorage.getItem("token");
            if (savedToken) {
                setToken(savedToken);
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
    }, []);

    const contextValue = {
        foodList,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        loading,
        url,
        token,
        setToken,  
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;




