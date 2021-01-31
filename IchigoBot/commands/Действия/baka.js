const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "baka",
  category: "Действия",
  description: "РП команда. Идиот",
  usage: "",
  run: async (client, message, args) => {


        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Упомяните кого-нибудь, чтобы обозвать его дураком.');

        async function work() {
        let owo = (await neko.sfw.baka());

        const baka = new Discord.MessageEmbed()
        .setDescription((" Дурак! " + user.toString()))
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(baka);

}

      work();
}
};