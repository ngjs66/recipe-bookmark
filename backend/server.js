const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = "mongodb+srv://dbAdmin:dbAdmin123@cluster0.htpi6.mongodb.net/test?retryWrites=true&w=majority";
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const recipesRouter = require('./routes/recipes');
const usersRouter = require('./routes/users');

// app.use(express.static('/recipes', recipesRouter));
// app.use(express.static('/users', usersRouter));
// app.use('/*', express.static('./route/users'));
// app.use('/static', recipesRouter);
// app.use('/users', usersRouter);
app.use('/routes/users', usersRouter);
app.use(express.static('backend'));

// app.get('/', (req, res) => {
//     res.render(req.params)
// })

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.get('/', function (req, res) {res.redirect('/users') });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
