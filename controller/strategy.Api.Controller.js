const strategyController = require('./strategy.Controller')

require('dotenv').config({ path: '/Users/kuzminskyi/WebstormProjects/bot_api/.env' })

exports.ideas_list = [ async (req, res) =>{
    if (req.body.secret_key===process.env.SECRET_KEY){
        let ideas = await strategyController.selectStrategy(req.body.from)
        res.send(ideas.rows)
    }
    else {
        res.status(500).send('Something failed!');
    }
}]