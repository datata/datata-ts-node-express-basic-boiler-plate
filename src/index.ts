import express from 'express'
import pingRoutes from './routes/v1/ping.routes'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/api', pingRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
