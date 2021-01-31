const Discord = require("discord.js");

module.exports = {
    name: "bsay",
    aliases: [],
 run: async (client, message, args) => {
  
      message.delete().catch(O_o=>{});

  if(message.author.id === "411912253357555732") {
    let member = message.mentions.members.first();
      if(!member) return message.reply("Не могу найти пользователя!")

   const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{}); 

    message.channel.send(`${member} Ошибка, которую вы нашли исправлена!`)

  }
}
}


