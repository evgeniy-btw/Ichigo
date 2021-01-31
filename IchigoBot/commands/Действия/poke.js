const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "poke",
  category: "Действия",
  description: "РП команда. Тыкнуть",
  usage: "",
  run: async (client, message, args) => {


        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Упомяните кого-нибудь, чтобы тыкнуть');

        async function work() {
        let owo = (await neko.sfw.poke());

        const pokeembed = new Discord.MessageEmbed()
        .setDescription((message.author.toString() + " тыкнул(-а) " + user.toString()))
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(pokeembed);

}

      work();
}
                };