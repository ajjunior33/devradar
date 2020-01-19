module.exports = function paseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim(tech));
}