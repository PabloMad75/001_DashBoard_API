const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/api/logic.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'api', 'logic.js'));
});
app.get('/api/select.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'api', 'select.js'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en línea en el puerto ${port}`);
});
