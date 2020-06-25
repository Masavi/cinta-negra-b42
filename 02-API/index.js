// Configuración
const express = require('express');
const app = express();
const PORT = 3000;

// Endpoints
app.get('/', (req, res) => res.send('Hello World!'));

/*
  1.- Agrega un endpoint ‘/api/’ que responda a 
      una petición de tipo GET con un código de estado 200 
      y el siguiente json: 
                  {‘mensaje’:‘hola mundo’}
*/

app.get('/api/', (request, response) => {
  response.status(200).json({ message: 'hello world' });
});


/*
  2.- Agrega un endpoint ‘/api/suma’ que responda a una 
      petición de tipo GET con la suma de dos números que 
      reciba mediante las querys num1 y num2. El servidor
      debe responder con un código de estado 200 y un json 
      como el siguiente:
                      {‘resultado’: 7}

*/

app.get('/api/suma', (req, res) => {
  const { num1, num2 } = req.query;
  const resultado = parseInt(num1) + parseInt(num2);
  res.status(200).json({ resultado });
});

/*
  3.- Agrega un endpoint ‘/api/usuario/’ que responda a
      una petición de tipo GET con el nombre que sea 
      recibido a través de params. El servidor debe responder
      con un código de estado 200 y un json como este:
                    {‘usuario’: ‘Edwin’}
  4.- Agrega un endpoint ‘/api/swapi’ que responda a una
      petición de tipo GET con el personaje solicitado de 
                      https://swapi.co/
      El cliente debe mandar el número de personaje mediante
      params. La respuesta del servidor debe lucir algo así
                  {‘personaje’: {
                      ‘name’: ‘Luke Skywalker’,
                      ...,
                  }}
*/

// Encender la API
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));