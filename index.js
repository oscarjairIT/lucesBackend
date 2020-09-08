const server = require('./src/middleware/index');
const { PORT, MONGO_URI, EWELINK_PASSWORD, EWELINK_MAIL } = require('./src/config');
const mongoose = require('mongoose');
const ewelink = require('ewelink-api');

// const connection = new ewelink({
//     email: EWELINK_MAIL,
//     password: EWELINK_PASSWORD,
//     region: 'cl',
// });

// const devices = await connection.getDevices();

mongoose.connect(MONGO_URI, {useNewUrlParser: true}).then(()=>{

    server.listen(PORT, ()=>{
        console.log(`API corriendo en puerto ${PORT}`);


        /**TESTING EWELINK */
        (async () => {
            console.log(EWELINK_MAIL);
            console.log(EWELINK_PASSWORD);
            // const region = await connection.getRegion();
            // console.log(region);
            const connection = new ewelink({
                email: EWELINK_MAIL,
                password: EWELINK_PASSWORD,
                region: 'us',
            });

            /* get all devices */
            // const devices = await connection.getDevices();
            // console.log(devices);
            const auth = await connection.getCredentials();
            const connectionAPI = new ewelink({
                at: auth.at,
                apiKey: auth.user.apikey,
                region: auth.region,
            });
            

            // dimmer 1000413a1b
            // switch 100039b65a
            const status = await connectionAPI.getDevicePowerState('1000413a1b');
            console.log(status);

        })();
    });

}).catch(console.log);


