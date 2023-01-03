const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:8081'
}
app.use(cors(corsOptions));
// Parse request for content-type - application/json
app.use(bodyParser.json());
// Parse reuqests for content-type - application/x-www-form-url-encoded
app.use(bodyParser.urlencoded({ extended: true }));
// Simple route
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to bezkoder application.' })
})
// Set PORT, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Process is running on port ${PORT}`)
})
