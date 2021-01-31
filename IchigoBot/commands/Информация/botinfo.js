const Discord = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
const { url } = require("inspector");



module.exports = {
    name: "botinfo",
    category: "Информация",
  description: "Отправляет подробную информацию о боте",
  usage: "",
  run: async (client, message, args) => {

  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      const botinfo = new Discord.MessageEmbed()
          .setTitle("**Статистика:**")
          .setColor("RANDOM")
          .addField("⏳ Потребление памяти:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
          .addField("⌚️ Время работы:", `${duration}`, true)
          .addField("<:people:785207669442347050> Всего пользователей:", `${client.users.cache.size}`, true)
          .addField("<:server:785207914616848414> Всего серверов:", `${client.guilds.cache.size}`, true)
          .addField("📁 Всего каналов:", `${client.channels.cache.size}`, true)
          .addField("<:Discord_icon:785204135431241728> Версия Discord.js", `v${version}`, true)
          .addField("<:nodejs:785206907085520896> Node", `${process.version}`, true) 
          .addField("🤖 CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
          .addField("🤖 CPU Используется", `\`${percent.toFixed(2)}%\``, true)
          .addField("💻 Платформа", `\`\`${os.platform()}\`\``, true)
          .addField("Задержка API", `${(client.ws.ping)}ms`) 
          .addField("WebSite:","[Официальный сайт Дискорд Бота - Ichigo](http://ichigobot.ga/)")
          .addField("<:developer:785207174241714226> Разработчик:", `evgen1y#2107`)

      message.channel.send(botinfo)
  });
  }
  }; 