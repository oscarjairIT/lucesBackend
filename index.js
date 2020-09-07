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
            const devices = await connection.getDevices();
            console.log(devices);

            /* get specific devide info */
            // const device = await connection.getDevice('<your device id>');
            // console.log(device);

            /* toggle device */
            // await connection.toggleDevice('<your device id>');

        })();
    });

}).catch(console.log);


