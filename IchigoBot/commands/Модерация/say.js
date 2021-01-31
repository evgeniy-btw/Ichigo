const Discord = require("discord.js");

module.exports = {
    name: "say",
    aliases: [],

    run: async (client, message, args) => {
  
      message.delete().catch(O_o=>{});
  
      if(message.author.id === "411912253357555732") {

   const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{}); 

    message.channel.send(sayMessage);
  }
}}

