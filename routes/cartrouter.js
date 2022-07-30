import express from "express";
import { client } from "../index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await client.db("Zoiva").collection("cart").find({}).toArray();
  res.send(data);
});

router.post("/", async (req, res) => {
  const data = req.body;
  if (data.length===0) {
    res.send("add products");
  } else {
    await client.db("Zoiva").collection("cart").deleteMany({});
    const result = await client.db("Zoiva").collection("cart").insertMany(data);
    res.send(result);
  }
});

export const cartrouter = router;
