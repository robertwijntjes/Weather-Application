const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
console.log(address);

if(!address){
    console.log('Please Provide an Address');
}
else{
    geoCode(address,(error,{latitude,longitude,location})=>{
        if(error){
            return console.log(error);
        }
    
        forecast({latitude,longitude},(error,Forecastdata)=>{
            if(error){
                return console.log(error);
            }
    
            console.log(location);
            console.log(Forecastdata);
        });
    
    })
}

