 import robot from 'robotjs';
import { Duplex } from 'stream';
import   WebSocket  from 'ws';

export const rectangular = ( packet:string[] ) =>
{

	const mouse = robot.getMousePos()
	const x1 = mouse.x
						const x2 =( mouse.x + Number( packet[1] ))
						const y1 = mouse.y
						const y2 = ( mouse.y + Number( packet[2] ) )

	  robot.mouseToggle( 'down' ) ;
   robot.mouseToggle('down');
			robot.moveMouseSmooth(x1 + Number( packet[1]),y1)
			robot.moveMouseSmooth(x2,y1 + Number( packet[2]))
			robot.moveMouseSmooth(x2 - Number( packet[1]),y2)
				robot.moveMouseSmooth(x1,y2 - Number( packet[2]))
				robot.mouseToggle('up');

}