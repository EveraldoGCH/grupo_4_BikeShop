//REQUIRES//
const express= require('express');
const app = express();
const path = require('path');
const mainRouter=require('./router/mainRouter')
const rutasUsuarios=require('./router/rutasUsuarios')
const rutasProductos=require('./router/rutasProductos')
const port=3000
//TERMINA REQUIRES//

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
//RUTAS//
app.use('/', mainRouter);
app.use('/products', rutasProductos)
app.use('/users', rutasUsuarios)

//SERVIDOR EXPRESS//
app.listen(port, () => console.log('Servidor corriendo :)'));