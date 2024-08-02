const express  = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');
require('./models/User.js');
require('./services/passport.js');

const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);

const app = express();
authRoutes(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT);