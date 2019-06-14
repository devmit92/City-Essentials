const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "community"
                        JOIN "community_users" ON "community"."id" = "community_users"."community_id"
                        JOIN "users" ON "community_users"."user_id" = "users"."id";`;
    if (req.isAuthenticated()) {
        pool.query(queryText)
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for post:', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});

router.get('/:id', (req, res) => {
    const queryText = `SELECT "post_likes" FROM "community"
                        JOIN "community_users" ON "community"."id" = "community_users"."community_id"
                        JOIN "users" ON "community_users"."user_id" = "users"."id"
                        WHERE "community"."id"=$1;`;
    if (req.isAuthenticated()) {
        pool.query(queryText, [req.params.id])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for post:', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});


router.post('/', (req, res) => {
    console.log('Yo', req.body);
    const queryText = `INSERT INTO "community" (user_id, posting_content) VALUES ($1, $2);`;
    if (req.isAuthenticated()) {
        pool.query(queryText, [req.user.id, req.body.content])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making INSERT for post:', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});



router.delete('/:id', (req, res) => {

});



router.put('/:id', (req, res) => {
    const queryText = `UPDATE "community"
                        SET "post_likes" = "post_likes" + 1
                        WHERE "community"."id"=$1;`;

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



module.exports = router;