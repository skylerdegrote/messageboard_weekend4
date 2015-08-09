/**
 * Created by Skyler DeGrote on 8/7/15.
 */

//modules are separated functions
//this file is the fail safe router - catches any request that isn't met by other modules
    //think of this file as the branch that the app will go to IF the app is not stopped by any other specific request
    //this is what the /* is saying

var express = require('express');
var router = express.Router();
var path = require('path');

router.get("/*", function(req, res, next){//catch all the left overs
    var file = req.params[0] || 'views/index.html'; //still not 100% sure what the req.params[0] is...
    res.sendFile(path.join(__dirname, "../public", file)); //the response is to SEND THE FILE's path
    // that is brought up to the public folder and brought back down the file mentioned in the variable on the line above
});

module.exports = router; //this is a module so it needs to be exported in order to be used elsewhere