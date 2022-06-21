const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones
app.set('port', 3000);
app.set('json spaces', 2);

//middlewares
//Me permite ver por consola lo que esta lleganndo al servidor
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Rutas
app.use('/api/automoviles', require('./routes/automoviles'));

//Iniciar el servidor
app.listen(app.get('port'), () =>
{
    console.log(`Server on port ${app.get('port')}`);
});