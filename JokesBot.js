var TelegramBot = require('node-telegram-bot-api');
var request = require('request');

var token = '1232348443:AAFu7G8ZyXaUkgZEBgq0ytYeMKI3NvLgJn8';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on('message', function(msg) {
	request('https://official-joke-api.appspot.com/random_joke', function(err, res, body) {
		
		if(err) {
			bot.sendMessage(msg.chat.id, "Sorry, An error occured!!");
		}
		else {
			var joke = JSON.parse(body).setup + '\n' + JSON.parse(body).punchline
			console.log(body) 
			bot.sendMessage(msg.chat.id, joke); 
		}
	})

});