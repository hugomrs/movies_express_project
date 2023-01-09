require('dotenv').config()
require('express-async-errors')
const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()

mongoose.set('strictQuery', true)

//Connect DB
const connectDB = require('./db/connect')
const authenticateUser = require('./middleware/authentication')

//Routers
const authRouter = require('./routes/auth')
const moviesRouter = require('./routes/movies')

//Error handling
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

//Routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/movies', authenticateUser, moviesRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
