const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "pat",
  category: "Действия",
  description: "РП команда. Погладить",
  usage: "",
  run: async (client, message, args) => {

        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Вы должны упомянуть кого-либо, чтобы совершить действие');

        async function work() {
        let owo = (await neko.sfw.pat());

        const patembed = new Discord.MessageEmbed()
        .setDescription((message.author.toString() + " погладил(-а) " + user.toString()))
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(patembed);

}

      work();
}
                };