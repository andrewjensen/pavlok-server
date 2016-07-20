var termImg = require('term-img');
var clear = require('cli-clear');
var chalk = require('chalk');

var images = [
'backToTheFuture',
'electricity',
'ernest',
'pokemon2',
'starWars',
'friends',
'goofy',
'homeAlone',
'backToTheFuture3',
'jimCarey',
'starWars2',
'simpsons',
'kermit',
'snl',
'kramerScared',
'lotr2',
'neighbors',
'homeAlone2',
'pokemon3',
'starWars4',
'princeBelAir',
'sandlot',
'shocked',
'simpsons2',
'snl2',
'starWars5',
];

var t = 60;
var interval;
var index = 0;

function outputTime(t) {
	clear();
	index += 1;
	if (images[index] === undefined) {
		index = 0;
	}
	console.log(chalk.red('Build is broken!'));	
	console.log(chalk.red('Time remaining: ') + chalk.bgRed((t > 0 ? t : 0) + 's'));	
	var imageName = images[index];
	if (imageName === undefined) {
		imageName = images[images.length - 1];
	}
	termImg('images/' + imageName + '.gif');
}

function outputShock() {
	clear();
	console.log(chalk.bgRed('Oh noes!!!!'));	
	termImg('images/backToTheFuture4.gif');
}

function fixed(){
	endOutput();
	clear();
	console.log(chalk.green('Congrats!!'));	
	termImg('images/youDaMan.gif');
}

function startOutput() {
	 interval = setInterval(function() {
		if (t >= 0 ) {
			outputTime(t);
		}
		if (t <= -1) {
			endOutput();
			outputShock();
		}
		t -= 1;
	}, 1000);
}

function endOutput() {
	clearInterval(interval);
}

function time(_) {
	if (_ === undefined) {
		return _;
	}
	t = _;
}

module.exports = {
	startOutput,
	time,
	fixed
};
