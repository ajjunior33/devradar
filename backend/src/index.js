const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');


const port = 3344;
const ip = '192.168.15.45';

const app = express();

mongoose.connect('mongodb+srv://ajjunior33:Andreregedit2@cluster0-u5i9k.mongodb.net/week10?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(port,ip, () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
    console.log('Para derrubar o servidor: ctrl + c');
});