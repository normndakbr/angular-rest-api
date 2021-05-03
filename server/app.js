require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./models')

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connected successfully!");
    })
    .catch(err => {
        console.log("Cannot connect to database!", err);
    })

app.listen(PORT, () => {
    console.log(`Application is listening on http://localhost:${PORT}`);
})