import "reflect-metadata"
import express from 'express'
import { env } from './config/env'
import { router } from './router/urls'
import { Connection } from './config/defaultConneciton'

const app = express()
Connection.MySqlConnect()

app.use(
  express.json(),
  express.urlencoded({extended: true}),
  router
)

app.listen(env.PORT, () => {
  console.log(`Server on | PORT ${env.PORT}`)
})