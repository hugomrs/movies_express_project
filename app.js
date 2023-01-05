require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('movies app')
})

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //await connectDB(process.env.MONGO_URI);

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
