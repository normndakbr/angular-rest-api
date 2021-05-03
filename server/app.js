require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(PORT, () => {
    console.log(`Application is listening on http://localhost:${PORT}`);
})