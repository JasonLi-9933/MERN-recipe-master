const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
// const db = require('./db');
const recipesRouter = require('./routerConfig');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

const uri = "mongodb+srv://JasonLi:771011@telemetryinterface1.zsqxn.mongodb.net/recipes?retryWrites=true&w=majority";
const localURL = "mongodb://localhost:27017/recipes";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB Connected!"))
    .catch(e => console.log("Fail to connect database", e.message));

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../build')));

app.use('/api', recipesRouter);
app.get('/test', (req, res) => {
    res.json({data: 123});
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => console.log("Server is running on port: " + port));