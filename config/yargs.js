const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'    
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Indicador para mostrar la tabla en consola'   
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Limite superior hasta donde debe generarse la tabla 1 x ?'   
    })
    .check( (argv,options)=>{
        //console.log('yargs', argv)
        if( isNaN( argv.b) ){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

    module.exports = argv;