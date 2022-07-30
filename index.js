import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';
import { productsrouter } from './routes/productsrouter.js';
import { categoriesrouter } from './routes/categoriesrouter.js';
import { cartrouter } from './routes/cartrouter.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json())
app.use(cors())
const MONGO_URL = process.env.MONGO_URL;

async function createConnection(){
    const client = new MongoClient(MONGO_URL);
   await client.connect();
    console.log(`MongoDB connected`);
    return client;
}

export const client = await createConnection();

app.get("/",(req,res)=>{
    res.send("Home")
})

app.use("/products",productsrouter)
app.use("/categories",categoriesrouter)
app.use("/cart",cartrouter)

app.listen(PORT,()=>{console.log(`App started at port: ${PORT}`)});
