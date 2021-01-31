const { MessageEmbed } = require('discord.js');

module.exports = {

        name: "channelinfo",
        aliases: ['ci', 'channeli', 'cinfo'],
        category: "Информация",
        description: "Узнать информацию о текстовом канале",
        usage: "",

    run: async (bot, message, args) => {
        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;
        if (!channel) return message.channel.send("Канал не найден");

        let channelembed = new MessageEmbed()
            .setTitle(`Информация о ${channel.name}`)
            .setThumbnail(message.guild.iconURL())
            .addField("**NSFW**", channel.nsfw, true)
            .addField("**ID**", channel.id, true)
            .addField("**Тип**", channel.type)
            .addField("**Описание**", `${channel.topic || "No Description"}`)
            .addField("**Создан**", channel.createdAt)
            .setColor("GREEN")
        message.channel.send(channelembed);
    }
}