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


    switch (command) {
        case '':
            msg.reply('Hi nerd');
            break;
        case 'dinger':
            // if(users.includes(user)){
            //     msg.reply('You already picked someone for the dinger draft. Try sub instead')
            // }
            // else{
            msg.reply(user + ' picked: ' + args[0])
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
            if (Object.keys(draft).length === 0) {
                msg.reply("Object is empty");
            } else {
                msg.reply(Object.values(draft));
            }
            break;
        case 'cmd':
            msg.reply("Current commands are dinger list clear obj cmd whip kill");
            break;
        case 'whip':
            msg.reply("it just makes sense too, half of the time i think you can confuse yourself more trying to be a statistical billy beane cloned genius than you would if you were just using common sense, if you’re a dominating pitcher you’re not allowing a ball put into play, if by somehow you are putting the ball into play then at that point it’s all up to your defense, a poor defense would mean a higher babip because they aren’t turning those hit balls into outs, you guys just want to cut it off at the point that a high babip means a positive regression is coming but much more comparison goes into this, you really can’t just assume somebody is going to positively regress from a high babip, i guarantee 9 times out of 10 the player has a high babip because he’s just bad, you have to compare it to their career trends, you have to analyze what type of pitcher they are and what they throw, all and all i live by my opinion that whip is single handedly the most important statistic there is.");
            break;
        case 'kill':
            msg.reply("goodbye");
            process.exit(1);
        default:
            msg.reply(command + " is an undefined function");
    }
});