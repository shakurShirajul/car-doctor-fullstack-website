import mongoose from "mongoose";
// import 'dotenv/config'

const uri = `mongodb://localhost:27017/`;


export const database = () => {
    mongoose.connect(uri, { dbName: "CarDoctor" })
        .then(() => {
            console.log("Database is connected....");
        })
        .catch(error => {
            console.log(error);
        })
}