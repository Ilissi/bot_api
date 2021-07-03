const db = require('../db')


class strategyController {

    async selectStrategy(timestamp){
        let response;
        try {
            response = await db.query(`SELECT id, type, url, source, ticker, order_type, entry_price, tp, sl, nickname, comment, ts, ts_update, status, watchlist, comment_admin, parent_id FROM strategy WHERE ts >= to_timestamp(${timestamp}) OR ts_update >= to_timestamp(${timestamp})`)
            return response;
        }
        catch (error){
            return error;
        }
    }
}

module.exports = new strategyController()