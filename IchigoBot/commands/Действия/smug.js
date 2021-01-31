const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "smug",
  category: "Действия",
  description: "РП команда. Доволен собой",
  usage: "",
  run: async (client, message, args) => {


        async function work() {
        let owo = (await neko.sfw.smug());

        const smug = new Discord.MessageEmbed()
        .setDescription(( message.author.toString() + " доволен(-льна) собой "))
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(smug);

}

      work();
}
                };