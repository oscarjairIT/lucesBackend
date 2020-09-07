if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGODB_URI,
    EWELINK_MAIL: process.env.EWELINK_MAIL,
    EWELINK_PASSWORD: process.env.EWELINK_PASSWORD,
};