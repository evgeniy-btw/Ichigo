const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {

        name: "insta",
        aliases: ["instasearch"],
        description: "Узнайте немного приятной статистики instagram",

    run: async (bot, message, args) => {
        const name = args.join(" ");

        if (!name) {
            return message.channel.send("Введите имя instagram")
                .then(m => m.delete({timeout: 5000}));
        }

        const url = `https://instagram.com/${name}/?__a=1`;

        let res;

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.channel.send("Не могу найти аккаунт...").then(msg => {
                msg.delete({timeout: 5000})
            })
        }

        const account = res.graphql.user;

        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .setDescription("Информация")
            .addField("**Имя**", `${account.username}`)
            .addField("**Полное Имя**", `${account.full_name}`)
            .addField("**Биография**", `${account.biography.length == 0 ? "нету" : account.biography}`)
            .addField("**Всего постов**", `${account.edge_owner_to_timeline_media.count}`)
            .addField("**Подписчики**", `${account.edge_followed_by.count}`)
            .addField("**Подписки**", `${account.edge_follow.count}`)
            .addField("**Приватный аккаунт**", `${account.is_private ? "Да 🔐" : "Нет 🔓"}`);

        message.channel.send(embed);
    }
}