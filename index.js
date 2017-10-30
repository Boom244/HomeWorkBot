const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
const token = fs.readFileSync("./token.txt", {"encoding": "utf-8"});
function createResponse(content, reply)
{
    bot.on('message', (message) => {
        if(message.content == content)
        {message.reply(reply)}
        });
}

createResponse("!math", "The current math Homework is: 2 to 2.4")
createResponse("!wonder", "Current Wonder Homework: Part 2: Via")
createResponse("!commands", "!math: reminds math homework: !wonder: reminds Wonder Homework.")

bot.login(token);
