const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// Connect to MongoDB
mongoose.connect(
    process.env.MONGO
)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from MERN stack!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
