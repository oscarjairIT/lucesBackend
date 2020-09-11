const { EWELINK_PASSWORD, EWELINK_MAIL } = require('../../config');
const ewelink = require('ewelink-api');

// Obtiene dispositivos de la cuenta ewelink 
async function getDevices(){
    return new Promise(resolve =>{
        
        setTimeout(() => {
            
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
            // console.log(devices);
            resolve(devices);

        }, 3000);
    });
}