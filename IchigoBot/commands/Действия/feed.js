const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "feed",
  category: "Действия",
  description: "РП команда. Покормить",
  usage: "",
  run: async (client, message, args) => {


        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Упомяните кого-нибудь, чтобы покормить');

        async function work() {
        let owo = (await neko.sfw.feed());

        const feedembed = new Discord.MessageEmbed()
        .setDescription((message.author.toString() + " покормил(-а) " + user.toString()))
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(feedembed);

}

      work();
}
                };