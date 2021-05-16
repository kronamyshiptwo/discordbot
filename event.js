const discord = require("discord.js")
const client = new discord.Client()
var login = function(token){
client.login(token)
}
var trigger = function(command, reply){
client.on("message", message => {
if(message.content === command){
message.channel.send(reply)
}
})
}
module.exports{
login: login
}
