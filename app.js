   const koa = require('koa')

   const app = new koa()
   const durationMiddleware = require('./middleware/response_duration')
   const headerMiddleware = require('./middleware/response_header')
   const dataMiddlleware = require('./middleware/response_data')
   app.use(durationMiddleware)
   app.use(headerMiddleware)
   app.use(dataMiddlleware)
   app.listen(3000)

   const WebSocketService = require('./service/websocket')
   WebSocketService.listen()