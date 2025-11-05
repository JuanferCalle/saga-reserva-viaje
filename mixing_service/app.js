const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const reservas = [];


app.post('/reserve', (req, res) => {
  const user = req.body.user;


  reservas.push(user);
  res.status(200).json({ message: `Mezcla para ${user}` });
});

app.post('/cancel', (req, res) => {
  const user = req.body.user;
  const index = reservas.indexOf(user);
  if (index !== -1) {
    reservas.splice(index, 1);
    res.status(200).json({ message: `Uso de mezcla cancelada para ${user}` });
  } else {
    res.status(404).json({ message: `No hay mezcla para ${user}` });
  }
});

app.get('/reservas', (req, res) => {
  res.status(200).json(reservas);
});

app.listen(5007, () => {
  console.log('mixing Service listening on port 5007');
});
