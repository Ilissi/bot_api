let path = require('path')

const strategyController = require('./strategy.Controller')

require('dotenv').config({ path: path.join(__dirname, '.env')})

exports.ideas_list = [ async (req, res) =>{
    if (req.body.secret_key===process.env.SECRET_KEY){
        let ideas = await strategyController.selectStrategy(req.body.from);
        res.send(ideas.rows);
    }
    else if (req.body.secret_key!==process.env.SECRET_KEY){
        res.status(500).send('Wrong secret key!');
    }
    else {
        res.status(500).send('Something failed!');
    }
}]