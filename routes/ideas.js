let express = require('express');

let strategyApiController = require('../controller/strategy.Api.Controller');

let router = express.Router();

router.post('/ideas', strategyApiController.ideas_list);

module.exports = router;