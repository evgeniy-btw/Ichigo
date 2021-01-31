const { MessageEmbed } = require("discord.js");


module.exports = {
        name: "kick",
        category: "Модерация",
        description: "Кикнуть пользователя",

    run: async (client, message, args) => {
        try {
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У тебя нету прав! - **[KICK_MEMBERS]**");
            if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("У меня нет прав! - **[KICK_MEMBERS]**");

            if (!args[0]) return message.channel.send('Укажите пользователя')

            var kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!kickMember) return message.channel.send("Пользователя нет на сервере!");

            if (kickMember.id === message.member.id) return message.channel.send("Вы не можете кикнуть самого себя!")

            if (!kickMember.kickable) return message.channel.send("Вы не можете кикнуть данного пользователя.")
            if (kickMember.user.bot) return message.channel.send("Вы не можете кикнуть бота")

            var reason = args.slice(1).join(" ");
            try {
                const sembed2 = new MessageEmbed()
                    .setColor("RED")
                    .setDescription(`Привет, ты был кикнут с сервера - **${message.guild.name}**, по причине - **${reason || "Без причины!"}**`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                kickMember.send(sembed2).then(() =>
                    kickMember.kick()).catch(() => null)
            } catch {
                kickMember.kick()
            }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${kickMember.user.username}**был кикнут по причине: **${reason}**`)
            message.channel.send(sembed);
            } else {
                var sembed2 = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${kickMember.user.username}** был кикнут`)
            message.channel.send(sembed2);
            }


        } catch (e) {
            return message.channel.send(`**${e.message}**`)
        }
    }
}