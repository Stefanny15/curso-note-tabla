const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs.js')

crearArchivo ( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log (nombreArchivo, 'creado'))
    .catch( err => console.log(err) );

//const [ , ,arg3 = 'base=5'] = process.argv;
//const [ , base = 5]= arg3.split('=')


//const base = 3;

//crearArchivo ( base )
  //  .then( nombreArchivo => console.log (nombreArchivo, 'creado'))
    //.catch( err => console.log(err) );