import mongoose from "mongoose";

export const connectDB = async () => {
    try {
      await mongoose.connect('mongodb+srv://chocobox:223354sa@cluster0.lrfesur.mongodb.net/chocobox', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('DB Connected');
    } catch (error) {
      console.error('DB Connection Error:', error);
      process.exit(1);
    }
  };