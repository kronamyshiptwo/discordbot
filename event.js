const discord = require("discord.js")
const client = new discord.Client()
var login = function(token){
client.login(token)
}
module.exports{
login: login
}
