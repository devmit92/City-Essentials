const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

const businessesRouter = require('./routes/businesses.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());


app.use('/api/businesses', businessesRouter);

app.use(express.static('build'));


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});