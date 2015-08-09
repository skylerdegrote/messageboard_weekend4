/**
 * Created by Skyler DeGrote on 8/7/15.
 */

//this file happens when on the client app.js file we have post and get requests,
    // then this file is used to bring that information to the database



////router is a module with multiple functions (requests) in it
////post
////get
////delete




var express = require('express');
var router = express.Router();//this is the express router (has to be capitalized)
var path = require('path');
var Entry = require("../models/entry"); //requiring the entry.js file and //caps on Entry variable because is a schema

router.post("/", function(req, res, next){
    console.log("Post Hit: ", req.body);
    Entry.create(req.body, function(err, post){//WHAT IS THE REQ.BODY REFERRING TO?
        res.send("YAY! Post is working!");
    });
});

router.delete("/:id", function(req, res, next){
    Entry.findByIdAndRemove(req.params.id, req.body, function(err, post){ //mongoose code
        if(err){
            console.log("Error!! :", err);
        }
        res.json(post);
    });
});

router.get("/", function(req, res, next){
    Entry.find(function(err, posts){
        res.json(posts);
    });
});

module.exports = router;
























