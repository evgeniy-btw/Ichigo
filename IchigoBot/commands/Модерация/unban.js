const { MessageEmbed } = require("discord.js")

module.exports = {

        name: "unban",
        description: "Разбанить пользователя",
        usage: "",
        category: "Модерация",

    run: async (client, message, args) => {

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("У тебя нет прав! - **[BAN_MEMBERS]**")

        if (!args[0]) return message.channel.send("Введите имя пользователя!")
      
        let bannedMemberInfo = await message.guild.fetchBans()

        let bannedMember;
        bannedMember = bannedMemberInfo.find(b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || bannedMemberInfo.get(args[0]) || bannedMemberInfo.find(bm => bm.user.tag.toLowerCase() === args[0].toLocaleLowerCase());
        if (!bannedMember) return message.channel.send("Пожалуйста, укажите действительное имя пользователя, тег или идентификатор, иначе пользователь не будет забанен!")

        let reason = args.slice(1).join(" ")

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("У меня нет прав! - **[BAN_MEMBERS]**")
        try {
            if (reason) {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`${bannedMember.user.tag} был разбанен по причине: **${reason}**`)
                message.channel.send(sembed)
            } else {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`${bannedMember.user.tag} был разбанен`)
                message.channel.send(sembed2)
            }
        } catch {
            
        }
    }
}