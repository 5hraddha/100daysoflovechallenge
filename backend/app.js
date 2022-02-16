// All the imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const { PORT = 3000 } = process.env;
const app = express();

// Add all the middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Add all routes
require('./routes')(app);

app.use((req, res) => res
  .status(404)
  .send({ message: 'Requested resource not found' }));

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});