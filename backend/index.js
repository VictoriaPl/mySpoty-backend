import express from 'express'
import dbConfig from './config/db'
import middlewaresConfig from './config/middlewares'
import { UserRoute } from './modules'
import cors from 'cors'

const app = express()

app.use(cors())

// Database
dbConfig()

//Middlewares
middlewaresConfig(app)

app.use('/api', [UserRoute])

const PORT = process.env.PORT || 3000

app.listen(PORT, err => {
   if(err) {
      console.error(err);
   } {
      console.log(`Backend listening to port: ${PORT}`)
   }
})