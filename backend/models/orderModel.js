import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Order Processing"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
})

const orderModdel=mongoose.model.order || mongoose.model("Order",orderSchema)

export default orderModdel;

