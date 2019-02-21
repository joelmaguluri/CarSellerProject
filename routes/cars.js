const express = require('express');
const router = express.Router();

const Car = require('../models/cars');
const Seller = require('../models/seller');

router.route('/:sid').post(async(req,res,next)=>{
    const {sid} = req.params;
    //const sid = req.params.sid;
    const newCar = new Car(req.body);
    const seller = await Seller.findById(sid);
    newCar.seller = seller;
    await newCar.save();

    seller.cars.push(newCar);
    await seller.save();
    res.json({"Status":"Success"});

}).get(async(req,res,next)=>{
    const {sid} = req.params;
    //const sid = req.params.sid;
    const seller = await Seller.findById(sid).populate('cars','name year -_id');
    res.json(seller);
});

module.exports = router;