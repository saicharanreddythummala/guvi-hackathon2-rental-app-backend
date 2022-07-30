import express from "express";
import { client } from "../index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await client
    .db("Zoiva")
    .collection("categories")
    .find({})
    .toArray();

  res.send(data);
});

export const categoriesrouter = router;
