import mongoose from 'mongoose';    

const connectToDB = async () => {
    try{
        const connectionString = process.env.DB_CONNECTION_STRING
        await mongoose.connect(connectionString)
        console.log("Connected To DB")
    }catch(err){
        console.log("Err in connecting", err)
    }
}

export default connectToDB