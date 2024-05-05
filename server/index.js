import express from 'express';
import cors from 'cors'
import { database } from "./database/mongodb.js";
import { Service } from './models/service.js';

const app = express();
const PORT = process.env.PORT || 5000;

database();

// MiddleWare
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
});
app.get('/services', async (req, res) => {
    console.log("YEs");
    const services = await Service.find({});
    res.send(services)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})