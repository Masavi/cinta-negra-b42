// Configuración
const express = require('express');
const api = express();
const PORT = 3000;

// Endpoints
api.get('/', (req, res) => res.status(200).json({ message: "it's alive!" }));

// Encender el servidor
api.listen(PORT, () => console.log(`Listening on ${PORT}`));