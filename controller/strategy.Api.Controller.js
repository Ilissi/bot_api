const { body, validationResult } = require('express-validator');


exports.ideas_list = function (req, res){
    if (req.body) {
        console.log(req.body)
    }
    else {

    }
}