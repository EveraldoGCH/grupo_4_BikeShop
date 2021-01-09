const express= require('express');
const app = express();
const path = require('path');
let rutaIndex = path.resolve(__dirname, './index.html')
app.listen(3000, () => console.log('Servidor corriendo :)'));
app.get('/', (req, res)  =>{
    res.sendFile(rutaIndex)
})