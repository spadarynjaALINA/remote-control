
 import robot from 'robotjs';
import   WebSocket  from 'ws';

export const circle = ( packet:string[] ) =>
{
const radius=(Number(packet[1]))
	const mouse = robot.getMousePos()

 for (let i = 0; i <= Math.PI * 2; i+=0.01) {
         const x = mouse.x + (radius * Math.cos(i))
        const y = mouse.y + (radius * Math.sin(i))

		 robot.moveMouseSmooth( x, y )
		 robot.mouseToggle( 'down' )
   robot.mouseToggle( 'down' )
    }
 robot.mouseToggle('up')

}