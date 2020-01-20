const axios = require("axios");
const Dev = require('../models/Dev');
const parseStringAsArray = require("../utils/parseStringAsArray");
const {findConnections, sendMessage } = require('../websocket.js');

module.exports = {
    async index(req, res){
        const devs = await Dev.find();
        return res.json(devs);
    },
    async store(req, res){
        const {github_username, techs, latitude, longitude} = req.body;
        let dev = await Dev.findOne({github_username});
        if(!dev){

            let url_axios = `https://api.github.com/users/${github_username}`;
            const response = await axios.get(url_axios);
            let {name, avatar_url, bio } = response.data;
            if(name == null){
                name = response.data.login;
            }
            const arrayTechs = parseStringAsArray(techs);
            console.log(arrayTechs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: arrayTechs,
                location
            });

            //Filtrar as conexões
            const sendSocketMessageTo = findConnections(
                {latitude, longitude},
                arrayTechs
            );
            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }
        return res.json(dev);
    },
    async update(req, res){
        const { github_username } = req.params;
        let dev = await Dev.findOne({github_username});
        if(dev){
            dev = await Dev.update({github_username}, req.body, {new: true});   
        }
        return res.json(dev);
    },
    async destroy(req, res){
        const { github_username } = req.params;
        let dev = await Dev.findOne({github_username});
        if(dev){
            dev = await Dev.remove({github_username});
        }

        return res.json(dev);
    }
};