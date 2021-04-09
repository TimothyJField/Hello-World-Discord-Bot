/**
 * Documentation: https://discord.js.org/#/docs/main/stable/general/welcome
 */
var {
  Client
} = require('discord.js');

var PREFIX = '!'
var bot = new Client();
var token = '{your_token}';


bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});


bot.on('message', msg => {
  var content = msg.content;

  // Base Case
  if (content.indexOf(PREFIX) === -1) return;
  if (content.toLowerCase().indexOf('hi') !== -1) {
    msg.channel.send('Hello World!');
  }
});

bot.login(token);