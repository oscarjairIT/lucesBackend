const server = require('./src/server');
const { PORT, MONGO_URI } = require('./src/config');
const mongoose = require('mongoose');

mongoose.connect(MONGO_URI, {useNewUrlParser: true}).then(()=>{

    server.listen(PORT, ()=>{
        console.log(`API corriendo en puerto ${PORT}`);
    });

}).catch(console.log);


