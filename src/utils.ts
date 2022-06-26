export const message = (command:string[]) =>
{
	return console.log(`Received: ${command}\n`)
}

export const messageSuccess = (command:string[]) =>
{
	return console.log(`Result: ${command[0]} completed successfully`)
}