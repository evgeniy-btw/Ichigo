const { MessageEmbed } = require("discord.js");

module.exports = {

        name: 'roleinfo',
        category: "Информация",
        aliases: ["rinfo"],
        description: "Узнать информацию о роли",
        usage: "",


    run: async (bot, message, args) => {
        if (!args[0]) return message.channel.send("Введите название роли")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("Введите существующую роль!");

        const status = {
            false: "Нет",
            true: "Да"
        }

        let roleembed = new MessageEmbed()
            .setColor("#00ff00")
            .setAuthor(`Информация о ${role.name}`)
            .setThumbnail(message.guild.iconURL())
            .addField("**ID**", `\`${role.id}\``, true)
            .addField("**Название**", role.name, true)
            .addField("**Цвет**", role.hexColor)
            .addField("**Используют**", `${role.members.size} человек`)
            .addField("**Позиция**", role.position)
            .addField("**Упоминания**", status[role.mentionable])
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        message.channel.send(roleembed);
    }
}