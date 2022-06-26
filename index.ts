 import Jimp from 'jimp';
 import robot from 'robotjs';
import   WebSocket, { createWebSocketStream, WebSocketServer }  from 'ws';
import { httpServer } from './src/http_server';
import { square } from './src/square';
import { rectangular } from './src/rectangle';
import { circle } from './src/circle';
import { screen } from './src/screen';
import { message, messageSuccess } from './src/utils';
const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen( HTTP_PORT )

const wss = new WebSocketServer( { port: 8080 } )
wss.on( 'connection', ws =>
{
	 const wsStream = createWebSocketStream(ws, { encoding: 'utf-8', decodeStrings: false });

	wsStream.on( "data",async ( data ) =>
	{
try {

		const mouse = robot.getMousePos()
		const packet = data.toString().split( ' ' )

    switch (packet[0]) {
					case "mouse_left":
						message(packet)
						wsStream.write( `${data}\0`, 'utf-8' )
						robot.moveMouse( mouse.x - Number( packet[1] ), mouse.y )
						messageSuccess(packet)
						break;
					case "mouse_right":
							message(packet)
						wsStream.write( `${data}\0`, 'utf-8' )
						robot.moveMouse( mouse.x + Number( packet[1] ), mouse.y )

						messageSuccess(packet)
						break;
					case "mouse_up":
							message(packet)
						wsStream.write( `${data}\0`, 'utf-8' )
						robot.moveMouse( mouse.x, mouse.y - Number( packet[1] ) )

						messageSuccess(packet)
						break;
					case "mouse_down":
							message(packet)
						wsStream.write( `${data}\0`, 'utf-8' )
						robot.moveMouse( mouse.x, mouse.y + Number( packet[1] ) )
					messageSuccess(packet)
						break;
					case "mouse_position":
							message(packet)
						wsStream.write( `${data} ${mouse.x},${mouse.y}`, 'utf-8' )
						messageSuccess(packet)
						break;
					case "draw_circle":
							message(packet)
							wsStream.write( `${data}\0`, 'utf-8' )
						circle( packet )
					messageSuccess(packet)
						break;
					case "draw_rectangle":
						message( packet )
						wsStream.write( `${data}\0`, 'utf-8' )
						rectangular( packet )
						messageSuccess(packet)
						break;
					case "draw_square":
						message( packet )
							wsStream.write( `${data}\0`, 'utf-8' )
						square( packet, ws )
					messageSuccess(packet)
						break;
					case "prnt_scrn":
							message(packet)
						const p=await screen( 100, 100,wsStream )
						wsStream.write( `${data} ${p}\0`, 'utf-8' )
					messageSuccess(packet)
						break;
	}
} catch (error) {
console.error(error)
}  });
})
process.on('SIGINT', () => {
  process.stdout.write('Close wss\n');
  wss.close();
  process.exit(0);
});
wss.on( 'close', () => console.log('Close wss\n'))