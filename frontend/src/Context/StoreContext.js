import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [foodList, setFoodList] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");

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

    const removeFromCart=async(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }
      
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




