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

router.put('/:id', (req, res) => {
    const queryText = `UPDATE "businesses"
                        SET "business_likes" = "business_likes" + 1
                        WHERE "businesses"."id"=$1;`;

    if (req.isAuthenticated()) {
        pool.query(queryText, [req.params.id])
            .then((results) => {
                console.log('All good');
                res.sendStatus(200)
            })
            .catch(error => {
                console.log('Error making SELECT for post:', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.get('/top-five', (req, res) => {
    const queryText = `SELECT * FROM "businesses"
                JOIN "city_businesses" ON "businesses"."id" = "city_businesses"."businesses_id"
                JOIN "cities" ON "city_businesses"."city_id" = "cities"."id"
                ORDER BY "businesses"."business_likes" DESC
                LIMIT 5;`;
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


module.exports = router;