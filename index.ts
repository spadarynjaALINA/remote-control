import Jimp from 'jimp';
import {httpServer} from './src/http_server/index';
import robot from 'robotjs';
import WebSocket, { WebSocketServer } from 'ws';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen( HTTP_PORT );
const wss = new WebSocket( 'ws:localhost:3000' )
wss.onmessage = ( message ) =>
{console.log(message)

}

wss.on( 'connection', ws =>
{
	ws.on( 'message',( data:string) =>
	{
		console.log('data',data)
	} )
	ws.send('som')
} )
wss.on( 'close', () =>
{
	console.log('close wss')
})