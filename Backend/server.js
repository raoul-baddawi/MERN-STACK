const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errormidware');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/iframe/link', require('./routes/iframeLinks'))
app.use(errorHandler)

app.listen(port, () => console.log(`server listening on port ${port}`));