 import Jimp from 'jimp';
 import robot from 'robotjs';
import   WebSocket, { WebSocketServer }  from 'ws';

export const circle = ( packet:string[],server:WebSocket.WebSocket ) =>
{
const radius=(Number(packet[1]))
	const mouse = robot.getMousePos()



 for (let i = 0; i <= Math.PI * 2; i+=0.01) {
         const x = mouse.x + (radius * Math.cos(i));
        const y = mouse.y + (radius * Math.sin(i));

		server.send( robot.moveMouseSmooth( x, y ) )
		server.send( robot.mouseToggle( 'down' ) );
	server.send( robot.mouseToggle( 'down' ) );
    }

	server.send( robot.mouseToggle('up'));

}