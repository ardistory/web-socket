import { Console } from "console";
import http from "http";
import WebSocket from "ws";

const server = new http();
server.createServer((req, res) => {

});

const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
    console.log('Klien terhubung!');

    ws.on('message',);
});
