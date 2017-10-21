// Writing and reading from file using 
// functional async method


// Load all the dependencies 

var file 	= require('fs');
var chalk	= require('chalk');


// define the constant 

const text 		= "Joe Doe\njoedoe@email.com";
const fileName	= "./data.txt";


file.writeFile(fileName,text,writeCallback);


function writeCallback(err)
{
	if (err){
		console.log("Error writing ", err);
	}

	file.readFile(fileName,readCallback);
}

function readCallback(err,data){

	if(err){
		console.log("Error reading", err);
	}
	logg(data);
}


function logg(data){
	data = data.toString().split("\n");
	console.log(chalk.bgRed.bold("Name :"),chalk.underline(data[0]));
	console.log(chalk.bgRed.bold("Email :"),chalk.underline(data[1]));
}