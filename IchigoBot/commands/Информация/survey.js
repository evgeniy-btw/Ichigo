const { MessageEmbed } = require('discord.js');
const config = require("../../config.json");

module.exports = {
    name: "survey",
    category: "Информация",
  run: async (client, message, args) => {

    const say = args.join(" ");
    message.delete().catch(O_o=>{});

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;

    const embed = new MessageEmbed()
    .setTitle(`Опрос от ${message.author.tag}`)
    .setColor("#7289da")
    .setDescription(say)
    .setAuthor(`${message.author.tag}`, member.user.avatarURL())


    message.channel.send(`@everyone **Опрос!**`, embed).then(async function (message) {
        await message.react('✅')
        await message.react('❎')
    }) 


    

}}