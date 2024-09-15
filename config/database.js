import mongoose from "mongoose";

let connected = false;

const connectdb = async () => {
    mongoose.set('strictQuery', true);

    // if the database i already connected then don't connect again
    if(connected){
        console.log('Mongodb is connected!')
       return; 
    }

    // connct to mongdb
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true
    }catch(error){
     console.log(error);   
    }
};

export default connectdb;