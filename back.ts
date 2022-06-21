// import  WebSocket,{ WebSocketServer } from "ws";

// const wss = new WebSocket( 'ws:/localhost:3000' )
// // const wss = new WebSocketServer( { port: 3000 } )
// wss.on( 'connection', ws =>
// {
// 	ws.on( 'message',( data:string) =>
// 	{
// 		console.log('data',data)
// 	} )
// 	ws.send('som')
// } )
// wss.on( 'close', () =>
// {
// 	console.log('close wss')
// })