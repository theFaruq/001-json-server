const jsonServer = require('json-server')

const data = require('./database')

const server = jsonServer.create()
const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()

const port = process.env.PORT || 8000

server.use(middlewares)
server.use(router)

server.listen(port)