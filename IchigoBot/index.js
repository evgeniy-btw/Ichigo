
const { Client, Collection } = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const mongoose = require('mongoose');

const prefix = require('./models/prefix');

const client = new Client({

disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});


client.on('message', async (message) => {
  if (message.author.bot) return;

  const data = await prefix.findOne({
      GuildID: message.guild.id
  });

  const messageArray = message.content.split(' ');
  const cmd = messageArray[0];
  const args = messageArray.slice(1);

  if(data) {
      const prefix = data.Prefix;

      if (!message.content.startsWith(prefix)) return;
      const commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
      commandfile.run(client, message, args);
  } else if (!data) {

      const prefix = (config.prefix);
      
      if (!message.content.startsWith(prefix)) return;
      const commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
      commandfile.run(client, message, args);
  }
})



client.login(config.token); 

mongoose.connect('mongodb://127.0.0.1:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
