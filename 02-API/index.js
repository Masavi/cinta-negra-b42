// Configuración
const express = require('express');
const app = express();
const PORT = 3000;

// Endpoints
app.get('/', (req, res) => res.send('Hello World!'));

// Encender la API
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));