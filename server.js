const express = require("express");
const bodyParser = require("body-parser");
const DBConnect = require("./DBConnect")
const app = express();
const port = process.env.PORT || 1234;
const sellerroute = require("./routes/sellers");
const carroute = require('./routes/cars.js');

app.use(bodyParser.json());
app.use("/", sellerroute);
app.use('/',carroute);

app.listen(port,function(){
    console.log(`Server connected at ${port}`);
});