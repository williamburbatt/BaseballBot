const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.login(config.BOT_TOKEN);

  
// Runs whenever a message is sent
var players = [];
var users = [];
var draft = {}
const prefix = config.MY_PREFIX;

client.on('message', (msg) => { 
    var user = msg.member.user.tag
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;

    const commandBody = msg.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();


    switch(command){
        case '':
                msg.reply('Hi nerd');
                break;
        case 'dinger':
            // if(users.includes(user)){
            //     msg.reply('You already picked someone for the dinger draft. Try sub instead')
            // }
            // else{
            msg.reply(user+' picked: '+ args[0])
            draft[user] = args[0];
            players[players.length] = args[0];
            users[users.length] = user
            //}
            break;
        case 'list':
                var returnList = []
                msg.reply(players);
                break;         
                
        case 'clear':
                players = []
                users = []
                msg.reply("cleared!" + players);
                break;
        case 'sub':
                break;
        case 'obj':
            if(Object.keys(draft).length === 0){
                msg.reply("Object is empty");
            }
            else{
            msg.reply(Object.values(draft));
            }
            break
        default:
            msg.reply(command+ " is an undefined function");
    }
  });