
const fs = require('fs');
const colorsS =require('colors');


const crearArchivo= async(base=1, listar=false, hasta=1)=>{
    //console.log(listar);
    try{
       

        let salida='';  

        for(let i=1;i<=hasta;i++){
            
            const resultadoColor = colorsS.green;
            const resultado = resultadoColor(base*i);

            salida +=`${base.toString().red} ${'x'.magenta} ${i.toString().yellow} = ${resultado}\n`;
            
        }

        if(listar){
            console.log('=================================='.rainbow);
            console.log('La Tabla del '.green, colorsS.blue(base), 'va asi: ');
            console.log(colorsS.rainbow('=================================='));
            
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        

        return `tabla-${base}.txt`;    
    }catch(err){
        throw err;
    };
}


const generaTabla= (base=1)=>{
    return new Promise((resolve,reject)=>{
        console.log('==================================');
        console.log('La Tabla del ', base, 'va asi: ');
        console.log('==================================');

        let salida='';  
        let nombreArch='';
        
        for(let i=1;i<=10;i++){
            salida +=`${base} x ${i} = ${base*i}\n`;
            
        }
        console.log(salida);
        
        nombreArch=`tablas-${base}.txt`;

        fs.writeFileSync(`./salidas/${nombreArch}`, salida)
        throw new Error('Throw makes it go boom!');
        salida?resolve(nombreArch):reject(`Error al crear el archivo ${nombreArch}`)
    });

    
}

const crearArchivoAsync= async(base) =>{
    try{
        const nombreA= await generaTabla(base);        
        return nombreA;
    }catch(error){
        throw error;
    }
}


  //  return new Promise((resolve, reject)=>{
const crearArchivo2 = ( base= 69) => {

        console.log('==================================');
        console.log('La Tabla del ', base, 'va asi: ');
        console.log('==================================');

        let salida='';  
        for(let i=1;i<=10;i++){
            salida +=`${base} x ${i} = ${base*i}\n`;
            
        }
        console.log(salida);
        
        fs.writeFileSync(`tabla-${base}.txt`, salida)

        console.log(`tabla-${base}.txt creado`);
    
    //})
}

// const crearArchivo= async(base=1)=>{
//     try{

    
//         }catch(error) {
//         throw error;
//     }   
// }

module.exports={
    crearArchivo
}