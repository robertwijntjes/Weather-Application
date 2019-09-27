const request = require('request');


const forecast = ({latitude,longitude},callback) =>{
    const url = 'https://api.darksky.net/forecast/access key goes here/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude);
    request({json:true,url},(error, {body})=>{
        if(error){
            callback('Unable to connect to weather service api',undefined);
        }
        else if (body.error){
            callback('Unable to find Location!',error);
        }
        else{
            callback(undefined,body.daily.data[0].summary);
        }

    });
}

module.exports = forecast;