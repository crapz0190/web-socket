import express from "express"
import { join } from "node:path"
import dirname from "./utils.js"
import { Server } from "socket.io"
import * as dotenv from "dotenv"
dotenv.config({ path: join(dirname, ".env")})

const app = express()

// Settings
app.set("PORT", process.env.PORT || 8080)

const server = app.listen(app.get("PORT"), () => {
  console.log(`Server on Port: https://localhost: ${app.get("PORT")}`)
})

const io = new Server(server)