 import Jimp from 'jimp';
import robot from 'robotjs'
import { Duplex } from 'stream';
import WebSocket from 'ws';

export const screen = async ( width: number, height: number,ws:Duplex ) =>
{
		const mouse = robot.getMousePos()
 const x = mouse.x - width
 const y = mouse.y - height
	const pic = robot.screen.capture( x, y, width * 2, height * 2 );
	const w = pic.byteWidth / pic.bytesPerPixel
  const h = pic.height
	const image = new Jimp( w, h );
	let red:number, green:number,blue:number
  pic.image.forEach((byte:number, i:number) => {
    switch (i % 4) {
      case 0: return blue = byte
      case 1: return green = byte
      case 2: return red = byte
      case 3:
        image.bitmap.data[i - 3] = red
        image.bitmap.data[i - 2] = green
        image.bitmap.data[i - 1] = blue
        image.bitmap.data[i] = 255
    }
  })
	const base64 = await image.getBufferAsync( Jimp.MIME_PNG )
const p = base64.toString( 'base64' )
return p
	}