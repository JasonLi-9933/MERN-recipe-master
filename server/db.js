const mongoose = require('mongoose');

const localURL = "mongodb://localhost:27017/recipes";

mongoose.connect(localURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .catch(e => console.log("Fail to connect database", e.message));

module.exports = mongoose.connection;