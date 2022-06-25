 import Jimp from 'jimp';
import robot from 'robotjs'
import WebSocket from 'ws';

export const screen = async ( width: number, height: number, ws: WebSocket.WebSocket ) =>
{
		const mouse = robot.getMousePos()
const x = mouse.x - width
const y = mouse.y - height
		console.log(x,y,x-width,y-height)
	const bitMap = robot.screen.capture( x, y, width*2, height*2 );
	console.log(x,y)
	const img = new Jimp( width * 2, height * 2 );
	var multi = bitMap.width /  width * 2;
var color =bitMap.colorAt(2 * multi, 3 * multi);

  img.bitmap.data = bitMap.image;
const base64= await img.getBufferAsync( Jimp.MIME_PNG)
 ws.send(`prnt_scrn ${base64.toString('base64')}\0`);

	}