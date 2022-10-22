
const path = require('path')
const fileUtils = require('../utils/file_utils')
const WebSocket = require("ws");
// const { WebSocketServer } = require("ws");

const ws = new WebSocket.Server({
  port: 9998,
});

module.exports.listen = () => {
  ws.on("connection", (client) => {
    console.log("客户端链接....总数为",ws.clients);
    client.on("message", async(msg) => {
        let payload = JSON.parse(msg)
        const action = payload.action
        if(action === 'getData'){
            let filePath = '../data/' + payload.chartName + '.json'
            filePath = path.join(__dirname, filePath)
            const ret  = await fileUtils.getfile(filePath)
            payload.data = ret
            client.send(JSON.stringify(payload))
        }else{

            ws.clients.forEach(client=>{
                client.send(msg)
            })


        }



    });
  });
};
