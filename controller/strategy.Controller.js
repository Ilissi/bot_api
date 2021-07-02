const db = require('../db')


class strategyController {

    async selectStrategy(timestamp){
        let response;
        try {
            response = await db.query('SELECT id, type, url, source, ticker, order_type, entry_price, tp, sl, ' +
                'nickname, comment, ts, ts_update, status, watchlist, comment_admin, parent_id FROM strategy' +
                'WHERE ts >=$1 OR ts_update>=$1', [timestamp])
        }
        catch (error){
            return error;
        }
    }
}

module.exports = new strategyController()