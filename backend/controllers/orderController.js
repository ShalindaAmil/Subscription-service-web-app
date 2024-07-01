// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe"

// const stripe =new Stripe(process.env.STRIPE_SECRET_KEY);

// //placing user order for frontend
// // const palceOrder=async(req,res)=>{
// //     const frontend_url="http://localhost:5173";
// //     try {
// //         const newOrder=new orderModel({
// //             userId:req.body.userId,
// //             items:req.body.items,
// //             amount:req.body.amount,
// //             address:req.body.address
// //         })
// //         await newOrder.save();
// //         await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

// //         const line_items= req.body.items.map((item)=>({
// //             price_data:{
// //                 currency:"LKR",
// //                 product_data:{
// //                     name:item.name
// //                 },
// //                 unit_amount:item.price*100*80
// //             },
// //             quantity:item.quantity
// //         }))
// //         line_items.push({
// //             price_data:{
// //                 currency:"LKR",
// //                 product_data:{
// //                     name:"Delivery Charges"
// //                 },
// //                 unit_amount:2*100*80
// //             },
// //             quantity:1,
// //         })

// //         const session = await stripe.checkout.sessions.create({
// //             payment_method_types: ['card'],
// //             line_items: line_items,
// //             mode: 'payment',
// //             success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
// //             cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
// //           });

// //           res.json({ success: true, session_url: session.url });

// //         } catch (error) {
// //             console.log(error);
// //             res.json({ success: false, message: 'Error' });
// //         }
// // }

// const palceOrder = async (req, res) => {
//     const frontend_url= process.env.FRONTEND_URL || "http://localhost:3000";
//     try {
//       const newOrder = new orderModel({
//         userId: req.body.userId,
//         items: req.body.items,
//         amount: req.body.amount,
//         address: req.body.address,
//       });
//       await newOrder.save();
//       await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
  
//       const line_items = req.body.items.map((item) => ({
//         price_data: {
//           currency: "inr",
//           product_data: {
//             name: item.name,
//           },
//           unit_amount: item.price * 100 * 80,
//         },
//         quantity: item.quantity,
//       }));
//       line_items.push({
//         price_data: {
//           currency: "inr",
//           product_data: {
//             name: "Delivery Charges",
//           },
//           unit_amount: 2 * 100 * 80,
//         },
//         quantity: 1,
//       });
//       const session = await stripe.checkout.sessions.create({
//         //payment_method_types: ['card'],
//         line_items: line_items,
//         mode: 'payment',
//         success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//         cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//       });
      
//       console.log("Stripe session URL: ", session.url);
//       res.json({ success: true, session_url: session.url });
  
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false, message: 'Error' });
//     }
//   };
  

// const verifyOrder= async(req,res)=>{
//     const{orderId,success}=req.query;
//     try {
//         if(success==="true"){
//             await orderModel.findByIdAndUpdate(orderId,{payment:true});
//             res.json({success:true,message:"Paid"});
//         }
//         else{
//             await orderModel.findByIdAndDelete(orderId);
//             res.json({success:false,message:"Not paid"});
//         }
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

// export {palceOrder,verifyOrder}



// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// const palceOrder = async (req, res) => {
//     const frontend_url = process.env.FRONTEND_URL || "http://localhost:3000";
//     try {
//         const newOrder = new orderModel({
//             userId: req.body.userId,
//             items: req.body.items,
//             amount: req.body.amount,
//             address: req.body.address,
//         });
//         await newOrder.save();
//         await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//         const line_items = req.body.items.map((item) => ({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: item.name,
//                 },
//                 unit_amount: item.price * 100 * 80,
//             },
//             quantity: item.quantity,
//         }));
//         line_items.push({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: "Delivery Charges",
//                 },
//                 unit_amount: 2 * 100 * 80,
//             },
//             quantity: 1,
//         });
//         const session = await stripe.checkout.sessions.create({
//             line_items: line_items,
//             mode: 'payment',
//             success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//             cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//         });

//         console.log("Stripe session URL: ", session.url);
//         res.json({ success: true, session_url: session.url });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: 'Error' });
//     }
// };

// const verifyOrder = async (req, res) => {
//     const { orderId, success } = req.query;
//     try {
//         if (success === "true") {
//             await orderModel.findByIdAndUpdate(orderId, { payment: true });
//             res.json({ success: true, message: "Paid" });
//         } else {
//             await orderModel.findByIdAndDelete(orderId);
//             res.json({ success: false, message: "Not paid" });
//         }
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" });
//     }
// };

// export { palceOrder, verifyOrder };






// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// const placeOrder = async (req, res) => {
//     const frontend_url = process.env.FRONTEND_URL || "http://localhost:3000";
//     try {
//         const newOrder = new orderModel({
//             userId: req.body.userId,
//             items: req.body.items,
//             amount: req.body.amount,
//             address: req.body.address,
//         });
//         await newOrder.save();
//         await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//         const line_items = req.body.items.map((item) => ({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: item.name,
//                 },
//                 unit_amount: item.price * 100 * 80,
//             },
//             quantity: item.quantity,
//         }));
//         line_items.push({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: "Delivery Charges",
//                 },
//                 unit_amount: 2 * 100 * 80,
//             },
//             quantity: 1,
//         });
//         const session = await stripe.checkout.sessions.create({
//             line_items: line_items,
//             mode: 'payment',
//             success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//             cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//         });

//         console.log("Stripe session URL: ", session.url);
//         res.json({ success: true, session_url: session.url });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: 'Error' });
//     }
// };

// const verifyOrder = async (req, res) => {
//     const { orderId, success } = req.body; // Ensure we read from req.body
//     try {
//         if (success == "true") {
//             await orderModel.findByIdAndUpdate(orderId, { payment: true });
//             res.json({ success: true, message: "Paid" });
//         } else {
//             await orderModel.findByIdAndDelete(orderId);
//             res.json({ success: false, message: "Not paid" });
//         }
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" });
//     }
// };

// export { placeOrder, verifyOrder };





// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// const palceOrder = async (req, res) => {
//     const frontend_url = process.env.FRONTEND_URL || "http://localhost:3000";
//     try {
//         const newOrder = new orderModel({
//             userId: req.body.userId,
//             items: req.body.items,
//             amount: req.body.amount,
//             address: req.body.address,
//         });
//         await newOrder.save();
//         await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//         const line_items = req.body.items.map((item) => ({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: item.name,
//                 },
//                 unit_amount: item.price * 100 * 80,
//             },
//             quantity: item.quantity,
//         }));
//         line_items.push({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: "Delivery Charges",
//                 },
//                 unit_amount: 2 * 100 * 80,
//             },
//             quantity: 1,
//         });
//         const session = await stripe.checkout.sessions.create({
//             line_items: line_items,
//             mode: 'payment',
//             success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//             cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//         });

//         console.log("Stripe session URL: ", session.url);
//         res.json({ success: true, session_url: session.url });

//     } catch (error) {
//         console.log("Error in placeOrder:", error);
//         res.json({ success: false, message: 'Error' });
//     }
// };

// const verifyOrder = async (req, res) => {
//     const { orderId, success } = req.body; // Ensure we read from req.body
//     console.log("Verify Order request received with:", { orderId, success });

//     try {
//         if (success == "true") {
//             const updatedOrder = await orderModel.findByIdAndUpdate(orderId, { payment: true }, { new: true });
//             console.log("Order updated:", updatedOrder);
//             res.json({ success: true, message: "Paid" });
//         } else {
//             const deletedOrder = await orderModel.findByIdAndDelete(orderId);
//             console.log("Order deleted:", deletedOrder);
//             res.json({ success: false, message: "Not paid" });
//         }
//     } catch (error) {
//         console.log("Error in verifyOrder:", error);
//         res.json({ success: false, message: "Error" });
//     }
// };

// // //user orders for frontend
// // const userOrders=async(rec,res)=>{
// //     try {
// //         const orders=await orderModel.find({userId:req.body.userId});
// //         res.json({success:true,data:orders})
// //     } catch (error) {
// //         console.log(error);
// //         res.json({success:false,message:"Error"})
// //     }
// // }


// const userOrders = async (req, res) => {
//     try {
//         console.log("Fetching orders for user ID:", req.body.userId);
//         const orders = await orderModel.find({ userId: req.body.userId });
//         console.log("Orders fetched successfully:", orders);
//         res.json({ success: true, data: orders });
//     } catch (error) {
//         console.error("Error fetching user orders:", error);
//         res.json({ success: false, message: "Error" });
//     }
// };


// export { palceOrder, verifyOrder, userOrders};




import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
    const frontend_url = process.env.FRONTEND_URL || "http://localhost:3000";
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name,
                },
                unit_amount: Math.round(item.price * 100 * 80), // rounding to the nearest integer
            },
            quantity: item.quantity,
        }));
        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Delivery Charges",
                },
                unit_amount: Math.round(2 * 100 * 80), // rounding to the nearest integer
            },
            quantity: 1,
        });
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        });

        console.log("Stripe session URL: ", session.url);
        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.log("Error in placeOrder:", error);
        res.status(500).json({ success: false, message: 'Error in placing order' });
    }
};

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body; // Ensure we read from req.body
    console.log("Verify Order request received with:", { orderId, success });

    try {
        if (success === "true") {
            const updatedOrder = await orderModel.findByIdAndUpdate(orderId, { payment: true }, { new: true });
            console.log("Order updated:", updatedOrder);
            res.json({ success: true, message: "Paid" });
        } else {
            const deletedOrder = await orderModel.findByIdAndDelete(orderId);
            console.log("Order deleted:", deletedOrder);
            res.json({ success: false, message: "Not paid" });
        }
    } catch (error) {
        console.log("Error in verifyOrder:", error);
        res.status(500).json({ success: false, message: "Error in verifying order" });
    }
};

const userOrders = async (req, res) => {
    try {
        console.log("Fetching orders for user ID:", req.body.userId);
        const orders = await orderModel.find({ userId: req.body.userId });
        console.log("Orders fetched successfully:", orders);
        res.json({ success: true, data: orders });
    } catch (error) {
        console.error("Error fetching user orders:", error);
        res.status(500).json({ success: false, message: "Error fetching user orders" });
    }
};

export { placeOrder, verifyOrder, userOrders };
