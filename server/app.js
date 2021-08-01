const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server, {
  allowEIO3: true,
})

const port = 3000

io.on('connection', socket => {
  console.log('a user connected')

  socket.on('userName', data => {
    console.log('userName', data)
  })

  setTimeout(() => {
    io.emit('serverName', {name: 'World'})
  }, 5000)
})

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
