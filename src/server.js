const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@omnistack-8art0.mongodb.net/omnistack09?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// GET, POST, PUT, DELETE

// req.query = Acessar query params ( para filtros)
//  req.params = Acessar route params ( para edição, delete)
// req.body = Acessar corpo da requisição ( para criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);
