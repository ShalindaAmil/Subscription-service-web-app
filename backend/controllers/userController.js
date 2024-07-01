// import userModel from "../models/userModel.js";
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"
// import validator from "validator"

// //login user
// const loginUser=async(req,res)=>{
//     const {email,password}=req.body;
//     try {
//         const user=await userModel.findOne({email})
//         if(!user){
//             return res.json({success:false,message:"User Doesn't exist"})
//         }
//         const isMatch=await bcrypt.compare(password,user.password);
//         if(!isMatch){
//             return res.json({success:false,message:"Invalid credentials"})
//         }
//         const token=createToken(user.id);
//         res.json({success:true,token})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }
// const createToken=(id)=>{
//     return jwt.sign({id},process.env.JWT_SECRET)
// }

// //register user
// const registerUser=async(req,res)=>{
//     const{name,password,email}=req.body;
//     try{
//         //chcecking is user already exists
//         const exists=await userModel.findOne({email});
//         if(exists){
//             return res.json({success:false,message:"User already exists"})
//         }
//         //validating email format and strong password
//         if(!validator.isEmail(email)){
//             return res.json({success:false,message:"Please enter a valid email"})
//         }
//         if(password.length<8){
//             return res.json({success:false,message:"Please enter a strong password"})
//         }
//         //hashing user password
//         const salt=await bcrypt.genSalt(10)
//         const hashedPassword=await bcrypt.hash(password,salt);

//         const newUser=new userModel({
//             name:name,
//             email:email,
//             password:hashedPassword
//         })
//         const user=await newUser.save()
//         const token=createToken(user._id)
//         res.json({success:true,token});
       
//     }catch(error){
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }
// export {loginUser,registerUser}

// import userModel from "../models/userModel.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import validator from "validator";

// // Helper function to create JWT
// const createToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, {
//         expiresIn: '1d' // Token expires in 1 day
//     });
// };

// // Login user
// const loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await userModel.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ success: false, message: "User doesn't exist" });
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ success: false, message: "Invalid credentials" });
//         }
//         const token = createToken(user.id);
//         res.status(200).json({ success: true, token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// };

// // Register user
// const registerUser = async (req, res) => {
//     const { name, email, password } = req.body;
//     try {
//         // Check if user already exists
//         const exists = await userModel.findOne({ email });
//         if (exists) {
//             return res.status(409).json({ success: false, message: "User already exists" });
//         }
//         // Validate email format
//         if (!validator.isEmail(email)) {
//             return res.status(400).json({ success: false, message: "Please enter a valid email" });
//         }
//         // Validate password strength
//         if (password.length < 8 || !validator.isStrongPassword(password, { minSymbols: 0 })) {
//             return res.status(400).json({ success: false, message: "Please enter a stronger password" });
//         }
//         // Hash user password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         const newUser = new userModel({
//             name,
//             email,
//             password: hashedPassword
//         });
//         const user = await newUser.save();
//         const token = createToken(user._id);
//         res.status(201).json({ success: true, token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// };

// export { loginUser, registerUser };




import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Helper function to create JWT
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d' // Token expires in 1 day
    });
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User doesn't exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }
        const token = createToken(user.id);
        res.status(200).json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "Name, email, and password are required" });
    }

    try {
        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }
        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }
        // Validate password strength
        if (password.length < 8 ) {
            return res.status(400).json({ success: false, message: "Please enter a stronger password" });
        }
        // Hash user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });
        const user = await newUser.save();
        const token = createToken(user._id);
        res.status(201).json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export { loginUser, registerUser };
