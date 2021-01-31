const Discord = require("discord.js");
const ownerid = "411912253357555732";

module.exports = {

    name: "serverlist",
    aliases: ["s"],

  run: async (bot, message, args) => {
    if (message.author.id == ownerid) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR"))
        return message.channel
          .send("У тебя нет прав!")
          .then(msg => msg.delete({ timeout: 5000 }));

      let i0 = 0;
      let i1 = 10;
      let page = 1;

      let description =
        `Всего серверов - ${bot.guilds.cache.size}\n\n` +
        bot.guilds.cache
          .sort((a, b) => b.memberCount - a.memberCount)
          .map(r => r)
          .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Участников\nID - ${r.id}`)
          .slice(0, 10)
          .join("\n");

      let embed = new Discord.MessageEmbed()
        .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setColor("GREEN")
        .setFooter(bot.user.username)
        .setTitle(`Страница - ${page}/${Math.ceil(bot.guilds.cache.size / 10)}`)
        .setDescription(description);

      let msg = await message.channel.send(embed);

      await msg.react("⬅");
      await msg.react("➡");
      await msg.react("❌");

      let collector = msg.createReactionCollector(
        (reaction, user) => user.id === message.author.id
      );

      collector.on("собрать", async (reaction, user) => {
        if (reaction._emoji.name === "⬅") {

          i0 = i0 - 10;
          i1 = i1 - 10;
          page = page - 1;


          if (i0 + 1 < 0) {
            console.log(i0)
            return msg.delete();
          }
          if (!i0 || !i1) {
            return msg.delete();
          }

          description =
            `Всего серверов - ${bot.guilds.cache.size}\n\n` +
            bot.guilds.cache
              .sort((a, b) => b.memberCount - a.memberCount)
              .map(r => r)
              .map(
                (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Участников`
              )
              .slice(i0, i1)
              .join("\n");


          embed
            .setTitle(
              `Страница - ${page}/${Math.round(bot.guilds.cache.size / 10 + 1)}`
            )
            .setDescription(description);


          msg.edit(embed);
        }

        if (reaction._emoji.name === "➡") {

          i0 = i0 + 10;
          i1 = i1 + 10;
          page = page + 1;


          if (i1 > bot.guilds.cache.size + 10) {
            return msg.delete();
          }
          if (!i0 || !i1) {
            return msg.delete();
          }

          description =
            `Всего серверов - ${bot.guilds.cache.size}\n\n` +
            bot.guilds.cache
              .sort((a, b) => b.memberCount - a.memberCount)
              .map(r => r)
              .map(
                (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Участников`
              )
              .slice(i0, i1)
              .join("\n");


          embed
            .setTitle(
              `Страница - ${page}/${Math.round(bot.guilds.cache.size / 10 + 1)}`
            )
            .setDescription(description);


          msg.edit(embed);
        }

        if (reaction._emoji.name === "❌") {
          return msg.delete();
        }


        await reaction.users.remove(message.author.id);
      });
    } else {
      return;
    }
  }
};