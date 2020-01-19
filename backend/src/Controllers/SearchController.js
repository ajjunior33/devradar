const Dev = require('../models/Dev');
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports ={
    async index(req, res){
        const {latitude, longitude, techs} = req.query;
        const arrayTechs = parseStringAsArray(techs);
        
        const devs = await Dev.find({
           techs: {
               $in: arrayTechs
            },
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });
        
        return res.json(devs)
    }
}