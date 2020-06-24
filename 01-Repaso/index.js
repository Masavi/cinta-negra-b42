const request = require('request');

/*
  --VARIABLES

  JS Vanilla
  VAR -> variable de alcance global (MALA PRACTICA)

  ES6 
  - LET -> variable de alcance local
  - CONST -> constante de alcance local
*/

/*
  --FUNCIONES

  JS Vanilla
  // Funcion convencional
  function miFuncion(arg1, arg2){
    // esto es el bloque de codigo que ejecuta la funcion
  }

  // Funciones Anonimas
  const miFuncion = function (arg1, arg2) {
    // esto es el bloque de codigo que ejecuta la funcion
  }

  ES6
  const miFuncion = () => {
    // esto es el bloque de codigo que ejecuta la funcion
  };

*/


/* 
  Esta es una Funcion de Orden Superior
  (Higher Order Function) 
    -> funciones que reciben como argumento otra funcion
*/
// const API_URL = ''
// request.get(API_URL, () => {
//   /*  
//     Esta funcion que se ejecuta dentro de la funcion de
//     Orden Superior, se conoce como CALLBACK
//   */
// });

const BR_BA_QUOTES = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
request.get(BR_BA_QUOTES, (err, res, body) => {
  if (res.statusCode === 200) {
    const json = JSON.parse(body);
    console.log(json);
    console.log(json[0].quote);
  }
  else console.log(res.statusCode, err);
});