const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 

app.use(bodyParser.json());

require('./models');

const port = 8082;
const userRoutes = require('./routes/userRoutes.js');
const locationRoutes = require('./routes/locationRoutes.js');

app.get('/', (req, resp) => {
    resp.send("Home page");
});

app.use('/apis/user', userRoutes);
app.use('/apis/user', locationRoutes);

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
