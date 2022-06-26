import robot from 'robotjs';
import  WebSocket  from 'ws';

export const square = ( packet:string[],server:WebSocket.WebSocket ) =>
{

	const mouse = robot.getMousePos()
	const x1 = mouse.x
						const x2 =( mouse.x + Number( packet[1] ))
						const y1 = mouse.y
						const y2 = ( mouse.y + Number( packet[1] ) )

						 robot.mouseToggle('down')
					 robot.moveMouseSmooth(x1 + Number( packet[1]),y1)
					 robot.moveMouseSmooth(x2,y1 + Number( packet[1]))
				 robot.moveMouseSmooth(x2 - Number( packet[1]),y2)
					 robot.moveMouseSmooth(x1,y2 - Number( packet[1]))
				 robot.mouseToggle('up')

}