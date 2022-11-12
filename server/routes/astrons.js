import express from "express";

const router =express.Router();

router.get("/",(req,res)=>{
  res.send("Hey there We are astrons")
});

export default router;