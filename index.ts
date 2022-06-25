 import Jimp from 'jimp';
 import robot from 'robotjs';
import   WebSocket, { WebSocketServer }  from 'ws';
import { httpServer } from './src/http_server';
import { square } from './src/square';
import { rectangular } from './src/rectangle';
import { circle } from './src/circle';
import { screen } from './src/screen';
const HTTP_PORT = 3030;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT)
const wss = new WebSocketServer( { port: 8888 } )
wss.on( 'connection', ws =>
{
	ws.send(JSON.stringify({
    type: "from server",
    content: [1 ]
	} )
	)
	ws.on("message", (data) => {
		const packet = data.toString().split( ' ' );

		const mouse = robot.getMousePos()
   console.log('i am here', packet, packet[0],packet[1])
    switch (packet[0]) {
      case "mouse_left":
						console.log( 'left' )
						robot.moveMouse(mouse.x - Number(packet[1]),mouse.y)
						break;
					 case "mouse_left":
	robot.moveMouse(mouse.x + Number(packet[1]),mouse.y)
						break;
					 case "mouse_up":
	robot.moveMouse(mouse.x,mouse.y - Number(packet[1]))
						break;
					 case "mouse_down":
	robot.moveMouse(mouse.x,mouse.y + Number(packet[1]))
						break;
					case "mouse_position":
						ws.send(`mouse_position ${mouse.x},${mouse.y}`)
						break;
					case "draw_circle":

  circle(packet,ws)
						break;
					case "draw_rectangle":
					rectangular(packet,ws)
						break;
					case "draw_square":
						 square(packet,ws)
						break;
						case "prnt_scrn":
screen(100,100,ws)
						break;
	}
  });
})

wss.on( 'close', () => console.log('close wss'))