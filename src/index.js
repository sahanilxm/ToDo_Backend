const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT } = require('./config/server.config.js');
const noteRoutes = require('./routes/note.route.js');

const startServer = () =>{
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());

    app.use('/notes', noteRoutes);

    app.listen(PORT, () => {
        console.log('Server runing on Port number: ', PORT);
    })
};

startServer();