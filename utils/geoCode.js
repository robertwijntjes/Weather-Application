const request = require('request');

const geoCode = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/ ' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibGFtYm9yYW1ibyIsImEiOiJjanVsNTcyOTgwbDlyM3lueDV5eHJ4aXhnIn0.-BylGZvtw_swU4t5MqvvPQ';
    
    request({json:true,url},(error,{body})=>{
        if(error){
            callback('Unable to Connect to Location Services');
        }
        else if (body.features.length === 0){
            callback('No data found');
        }
        else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
    
}

module.exports = geoCode;