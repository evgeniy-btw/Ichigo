const Discord = require("discord.js")

module.exports = {
    name: "avatar",
    category: "Информация",
    description: "Показывает Аватар Пользователя",
    usage: "",
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;

        if (!member.user.avatarURL) return message.channel.send(`У этого пользователя нет Аватара`);

        const avatar = new Discord.MessageEmbed()
            .setTitle(`Аватар ${member.user.username}`)
            .setColor("RANDOM")
            .setImage(member.user.avatarURL())
            .setURL(member.user.avatarURL())
        message.channel.send(avatar)

            .catch(() => message.channel.send('**Ошибка:** Отсутствует разрешение: `Embed link` '));

    }

};