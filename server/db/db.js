require('dotenv').config();
const mongoose = require('mongoose');

//this was giving a string parse error -> it comes from .env
//TypeError: Cannot read property 'split' of null
// alternative solution use mongoose v5.6.11
// const DB_URI = process.env.MONGODB_URI;

const DB_URI = 'mongodb+srv://numax:optimizeXP100@cluster0.2yssy.mongodb.net/applore-test?retryWrites=true&w=majority';

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {

    console.log('DB is running');
})

// module.exports = connection;