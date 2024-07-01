import userModel from "../models/userModel.js"

//add items to user cart
// const addToCart=async(req,res)=>{
//     try {
//         let userData=await userModel.findOne({_id:req.body.userId});
//         let cartData=await userData.cartData;
//         if(!cartData[req.body.itemId]){
//             cartData[req.body.itemId]=1;
//         }else{
//             cartData[req.body.itemId]+=1;
//         }
//         await userModel.findByIdAndUpdate(req.body.userId,{cartData});
//         res.json({success:true,message:"Added to Cart"});
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

const addToCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;
        let userData = await userModel.findOne({ _id: userId });

        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};
        if (!cartData[itemId]) {
            cartData[itemId] = 1;
        } else {
            cartData[itemId] += 1;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Added to Cart" });
    } catch (error) {
        console.log('Error in addToCart:', error);
        res.json({ success: false, message: "Error" });
    }
}


// const addToCart = async (req, res) => {
//     try {
//         console.log('Request received:', req.body);

//         let userData = await userModel.findOne({ _id: req.body.userId });
//         if (!userData) {
//             return res.json({ success: false, message: "User not found" });
//         }

//         console.log('User data fetched:', userData);

//         let cartData = userData.cartData || {};
//         if (!cartData[req.body.itemId]) {
//             cartData[req.body.itemId] = 1;
//         } else {
//             cartData[req.body.itemId] += 1;
//         }

//         console.log('Cart data updated:', cartData);

//         await userModel.findByIdAndUpdate(req.body.userId, { cartData });

//         console.log('Cart data saved to DB');

//         res.json({ success: true, message: "Added to Cart" });
//     } catch (error) {
//         console.log('Error in addToCart:', error);
//         res.json({ success: false, message: "Error" });
//     }
// }


//remove items from user cart
const removeFromCart=async(req,res)=>{
    try {
        let userData=await userModel.findById({_id:req.body.userId});
        let cartData=await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Removed from Cart"})
    } catch (error) {
        console.log(reeor);
        res.json({success:false,message:"Error"})
    }
}

//fetch user cart data
const  getCart= async(req,res)=>{
    try {
        let  userData=await userModel.findById({_id:req.body.userId});
        let cartData=await userData.cartData;
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addToCart,removeFromCart,getCart}