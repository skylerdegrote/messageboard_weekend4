/**
 * Created by Skyler DeGrote on 8/7/15.
 */

//TRAFFIC CONTROL FILE

var express = require("express");
var path = require("path");
var mongoose = require("mongoose");

var app = express();

var requests = require('./routes/requests');
var index = require('./routes/index');

var mongoURI = "mongodb://localhost:27017/messageboard";//the collection (lecture) is the database we are going to connect to
var mongoDB = mongoose.connect(mongoURI).connection;//establishes the connection to the database



mongoDB.on("error", function(err){
    if(err){
        console.log("MONGO ERROR ", err);
    }
});


mongoDB.once("open", function(){
    console.log("CONNECTED TO MONGODB!");
});




var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded:true}));

app.set("port", (process.env.PORT || 5000));

app.use("/requests", requests);
app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});