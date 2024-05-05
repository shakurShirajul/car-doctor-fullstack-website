import mongoose from "mongoose";

// const facilitySchema = new mongoose.Schema({
//     name: {
//         type: String,
//     },
//     detail: {
//         type: String,
//     }
// })

const serviceSchema = new mongoose.Schema({
    service_id: String,
    title: String,
    img: String,
    price: String,
    description: String,
    facility: Array,
})
export const Service = mongoose.model("services", serviceSchema);
