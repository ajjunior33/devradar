const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket'); 


const port = 3344;
const ip = '192.168.15.45';


const app = express();
const server = http.Server(app);
setupWebsocket(server);

mongoose.connect('mongodb+srv://ajjunior33:Andreregedit2@cluster0-u5i9k.mongodb.net/week10?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(cors());
app.use(express.json());
app.use(routes);



server.listen(port,ip, () => {});