/**
 * Created by Skyler DeGrote on 8/7/15.
 */


//schema

var mongoose = require("mongoose");//requiring mongoose - which is a way to communicate with the database?

var MessageBoardSchema = new mongoose.Schema({//all cap first letters for schemas
    //key: data type(data type has to be capitalized)
    name: String,
    message: String
});

module.exports= mongoose.model ("messageboard", MessageBoardSchema);//messageboard is what we call it and it is being given a value of MessageBoardSchema



