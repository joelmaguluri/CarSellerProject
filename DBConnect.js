const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://localhost:27017/seller",{ useNewUrlParser: true },function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Database Connected");
    }
})