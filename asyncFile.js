// Writing and reading from file using 
// ASYNC


//define required constants

const text 		= "Joe Doe\njoedoe@email.com";
const fileName	= "./data.txt";


// load required moules

var file 	= require('fs');
var chalk	= require('chalk');
var async	= require('async');


// Array of two function 
// 1. write
// 2. read

var funSeries = [
    function(callback){
    	file.writeFile(fileName,text,callback)
    },function(callback){
		file.readFile(fileName,callback)
    }	,
	];

async.series(funSeries,seriesCallbcak);


function seriesCallbcak(err, result)
{
	if (err){
		console.log(chalk.bold.Red("Error !! ", err));
	}
	logg(result[1]);
}

function logg(data){
	data = data.toString().split("\n");
	console.log(chalk.bgRed.bold("Name :"),chalk.underline(data[0]));
	console.log(chalk.bgRed.bold("Email :"),chalk.underline(data[1]));
}