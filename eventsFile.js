// Writing and reading from file using 
// events


// Load all the dependencies 

var file 	= require('fs');
var chalk	= require('chalk');
var events	= require('events');

// define the constant 

const text 		= "Joe Doe\njoedoe@email.com";
const fileName	= "./data.txt";

var workflow 	= new events.EventEmitter();

workflow.on("WRITE",writeListener);
workflow.on("READ",readListener);
workflow.on("LOG", logListener);


//define listeners

function writeListener(){
	file.writeFile(fileName,text,writeCallback);
}

function readListener(){
	file.readFile(fileName,readCallback);
}

function logListener(data){
	logg(data);
}


workflow.emit("WRITE");



//define callbacks 
function writeCallback(err)
{
	if (err){
		console.log("Error writing ", err);
	}
		workflow.emit("READ")
}

function readCallback(err,data){

	if(err){
		console.log("Error reading", err);
	}
	
	workflow.emit("LOG",data);
}

// log function using chalk module

function logg(data){
	data = data.toString().split("\n");
	console.log(chalk.bgRed.bold("Name :"),chalk.underline(data[0]));
	console.log(chalk.bgRed.bold("Email :"),chalk.underline(data[1]));
}