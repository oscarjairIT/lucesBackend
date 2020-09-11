const server = require('./src/middleware/index');
const { PORT, MONGO_URI, EWELINK_PASSWORD, EWELINK_MAIL } = require('./src/config');
const mongoose = require('mongoose');
const ewelink = require('ewelink-api');

mongoose.connect(MONGO_URI, {useNewUrlParser: true}).then(()=>{

    server.listen(PORT, ()=>{
        console.log(`API corriendo en puerto ${PORT}`);

        

        (async () => {
            const connection = new ewelink({
                email: EWELINK_MAIL,
                password: EWELINK_PASSWORD,
                region: 'us',
            });

            const auth = await connection.getCredentials();
            const connectionAPI = new ewelink({
                at: auth.at,
                apiKey: auth.user.apikey,
                region: auth.region,
            });
            
            // dimmer 1000413a1b
            // switch 100039b65a

            const devices = await connectionAPI.getDevices();
            devices.forEach(device => {
                console.log("*********************************************");
                console.log("nombre: ", device.name);
                console.log("deviceid: ", device.deviceid);
                console.log("online: ", device.online);
                if (device.params.state == "on" || device.params.state == "off"){
                    console.log("estado canal: ", device.params.state);
                } else {
                    console.log("estado canales: ", device.params.switches);
                } 
            });
        })();
        
    });

}).catch(console.log);


