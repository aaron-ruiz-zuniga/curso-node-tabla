
const{ crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();


//console.log(process.argv);
///console.log(argv);
//console.log('listar=',argv.l);

//console.log ('base: yargs',argv.b );

//no optimo
// const [,,arg3=69]= process.argv;
// const [,base=100]= arg3.split('=');

// console.log(base);


//const base=8;

//crearArchivo( base );
//console.log(argv.h);
 crearArchivo( argv.b, argv.l, argv.h )
     .then( nombreArchivo=>console.log(nombreArchivo.rainbow, 'creado'))
     .catch( err=>console.log(err));
    

//const imprimeTablaMulti = (tabla)=>{
     
    
    // console.log('==================================');
    // console.log('La Tabla del ', tabla, 'va asi: ');
    // console.log('==================================');

    // let salida='';  
    // for(let i=1;i<=10;i++){
    //     salida +=`${tabla} x ${i} = ${tabla*i}\n`;
        
    // }
    // console.log(salida);
    
    // fs.writeFileSync(`tabla-${tabla}.txt`, salida)

    // console.log(`tabla-${tabla}.txt creado`);
    
    
    
//}

//imprimeTablaMulti(4);
