const server = require('./src/server');
const { PORT } = require('./src/config');

server.listen(PORT, ()=>{
    console.log(`API corriendo en puerto ${PORT}`);
})
