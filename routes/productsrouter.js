import express from 'express';
import {client} from '../index.js'

const router = express.Router();

router.get("/",async (req,res)=>{
    const {category, search} = req.query;
    const data = await client.db("Zoiva").collection("products").find({}).toArray();
    let final;
    if(category){
       final=  data.filter(x=>x.category.toLowerCase() == category.toLowerCase());
    }else if(search){
        final =  data.filter(x=>x.detail.toLowerCase().includes(search.toLowerCase()))
    }else{
        final = data;
    }
    res.send(final)
})


export const productsrouter = router;