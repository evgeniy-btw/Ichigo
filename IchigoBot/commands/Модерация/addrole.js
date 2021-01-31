const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "addrole",
    category: "Модерация",
    description: "Добавить роль пользователю",
    usage: "",

    run: async (client, message, args) => {

        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Вы не можете использовать данную команду! Вам нужно иметь права - **[MANAGE_ROLES]**");
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Я не могу использовать эту команду! Мне нужны права - **[MANAGE_ROLES]**");
        
        if (!args[0]) return message.channel.send("Введите название роли!")

        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!rMember) return message.channel.send("Введите никнейм участника!");
        if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('Я не могу добавить роль этому пользователю!')

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rp => rp.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if (!args[1]) return message.channel.send("Введите название роли!")

        if (!role) return message.channel.send("Не могу найти нужную роль!")

        if (role.managed) return message.channel.send("Я не могу добавить роль этому пользователю!")
        if (message.guild.me.roles.highest.comparePositionTo(role) <= 0) return message.channel.send('Данная роль выше моей роли, пожалуйста поднимите мою роль выше!')

        if (rMember.roles.cache.has(role.id)) return message.channel.send("Пользователь имеет данную роль!")
        if (!rMember.roles.cache.has(role.id)) await rMember.roles.add(role.id);
        var sembed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setDescription(`Роль **${role.name}** успешно добавлена для **${rMember.user.username}**`)
        message.channel.send(sembed)
    }
};