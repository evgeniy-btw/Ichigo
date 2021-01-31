const { MessageEmbed } = require('discord.js');


module.exports = {

        name: "ban",
        category: "Модерация",
        description: "Забанить пользователя",


    run: async (bot, message, args) => {
        try {
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("У тебя нету прав! - **[BAN_MEMBERS]**");
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("У меня нету прав! - **[BAN_MEMBERS]**");
            if (!args[0]) return message.channel.send("Укажите пользователя")

            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!banMember) return message.channel.send("Пользователь не найден");
            if (banMember === message.member) return message.channel.send("Вы не можете забанить себя")

            var reason = args.slice(1).join(" ");

            if (!banMember.bannable) return message.channel.send("Вы не можете кикнуть пользователя")
            try {
            banMember.send(`Привет, ты был забанен на сервере **${message.guild.name}** по причине - **${reason || "Без причины"}**`).then(() =>
                message.guild.members.ban(banMember, { days: 7, reason: reason })).catch(() => null)
            } catch {
                message.guild.members.ban(banMember, { days: 7, reason: reason })
            }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${banMember.user.username}** был забанен по причине ${reason}`)
            message.channel.send(sembed)
            } else {
                var sembed2 = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${banMember.user.username}** был забанен`)
            message.channel.send(sembed2)
            }
         

        } catch {

        }
    }
};