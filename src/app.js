import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

// Obtener el directorio actual y el archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración del middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '..', 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Rutas para archivos específicos
app.get('/js/logic.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'js', 'logic.js'));
});

app.get('/js/functions.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'js', 'functions.js'));
});

// Ruta para página no encontrada
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
});

// Configuración del puerto de escucha y lanzamiento del servidor
app.listen(port, () => {
  console.log(`Servidor en línea en el puerto http://localhost:${port}`);
});
