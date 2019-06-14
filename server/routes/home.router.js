const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "businesses"
                JOIN "city_businesses" ON "businesses"."id" = "city_businesses"."businesses_id"
                JOIN "cities" ON "city_businesses"."city_id" = "cities"."id"
                ORDER BY "business_name" ASC;`;
    if (req.isAuthenticated()) {
        pool.query(queryText)
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for business:', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});