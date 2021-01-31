const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "slap",
  category: "Действия",
  description: "РП команда. Дать пощёчину",
  usage: "",
  run: async (client, message, args) => {


        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Упомяните кого-нибудь, чтобы дать пощечину');

        async function work() {
        let owo = (await neko.sfw.slap());

        const slapemebd = new Discord.MessageEmbed()
        .setDescription((user.toString() + " получил(-а) по щеке от " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(slapemebd);

}

      work();
}
                };