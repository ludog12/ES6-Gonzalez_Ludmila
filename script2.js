   /*TRABAJANDO CON PROMESAS */
   //PRIMER CÓDIGO.
   
   // Promesa almacenada en una constante
   const promesa = new Promise((resolve, reject)=>{
        ( 10 === 11)
        ? resolve('Los valores son iguales')
        : reject('Los valores son distintos')
        }
    );

    console.log(promesa.then((respuesta)=>{console.log(respuesta)
    }).catch((error)=>{console.log(error)}))
//SEGUNDO CÓDIGO
// Promesa dentro en una función.
const promesaDos=(provincia)=>{const promesa = new Promise( (resolve, reject)=> {
            ('Formosa' === provincia)
            ?resolve('Usted está ubicado en Formosa')
            :reject('Error al realizar la consulta')
    });

    return promesa;
}
console.log(promesaDos("Formosa").then((respuesta)=>{
    console.log(respuesta)
}).catch((error)=>{
    console.log(error)
}))