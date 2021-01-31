const Discord = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
const { url } = require("inspector");




module.exports = {
    name: "invite",
    category: "Информация",
  description: "Пригласить бота на свой сервер",
  usage: "",
  run: async (client, message, args) => {

  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      const botinfo = new Discord.MessageEmbed()
          .setTitle("Ссылка для приглашения Ichigo")
          .setColor("RANDOM")
          .addField("<:people:785207669442347050> Всего пользователей:", `${client.users.cache.size}`, true)
          .addField("<:server:785207914616848414> Всего серверов:", `${client.guilds.cache.size}`, true)
          .addField("<:Discord_icon:785204135431241728> Версия Discord.js", `v${version}`, true)
          .addField("<:nodejs:785206907085520896> Node", `${process.version}`, true) 
          .addField("<:developer:785207174241714226> Разработчик:", `evgen1y#2107`)
          .addField("<:bot:785208646001754112> Добавить бота на свой сервер", "[Ichigo](https://discord.com/api/oauth2/authorize?client_id=782645829038374912&permissions=8&scope=bot)")
          .addField("Сервер поддержки:","[Ichigo Support](https://discord.gg/kKZD9q7GE6)")
          .addField("WebSite:","[Официальный сайт Дискорд Бота - Ichigo](http://ichigobot.ga/)")
          .setThumbnail('https://media.discordapp.net/attachments/749638503683326004/785203241029206036/ichigo_bot.png?width=619&height=619')

      message.channel.send(botinfo)
  });
  }
  }; 