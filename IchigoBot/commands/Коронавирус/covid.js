const Discord = require("discord.js");
const moment = require("moment");
const api = require("novelcovid")

module.exports = {
  name: "covid",
  aliases: [],
  category: "Коронавирус",
  description: "covid",
  usage: "covid Страна (На английском) или Мир (world)",
  cooldown: 15000,
  run: async (client, message, args, con) => {
    let arg = args.slice(0).join(" ")
    let embedno = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Ошибка! Вы не указали страну!')
    .addField("**Укажите страну на Английском Языке**", "Пример: covid Russia")
    .setFooter(`запросил ${message.author.tag}`, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    .setTimestamp();
    if(!arg) return message.channel.send(embedno);

    if(arg == "world"){
        const stayhome = api.all().then(response => {

        let covid = new Discord.MessageEmbed()

        .setColor('RANDOM')
        .setTitle("**#ЛучшеДома!**")
        .setDescription('**Статистика Covid-19 в мире**')
        .addField("**Всего случаев**",response.cases,true)
        .addField("**Всего смертей**",response.deaths,true)
        .addField("**Всего вылечилось**",response.recovered,true)
        .setImage("https://mk0olympicexter0mvvu.kinstacdn.com/wp-content/uploads/COVID-19-Update.jpg")
        message.channel.send(covid)
        })
    }else{

        try {
        const stayhome2 = api.countries({country:arg}).then(response => {
            
        let covid = new Discord.MessageEmbed()

        .setColor('#00dcff')
        .setTitle("**#ЛучшеДома!**")
        .addField("**Всего случаев**",response.cases,true)
        .addField("**Всего смертей**",response.deaths,true)
        .addField("**Всего вылечилось**",response.recovered,true)
        .setImage("https://mk0olympicexter0mvvu.kinstacdn.com/wp-content/uploads/COVID-19-Update.jpg")

        message.channel.send(covid)
        })
    }catch(e){
        message.channel.send(`Произошла неизвестная ошибка! Ошибка была отправлена разработчику!`)
    }
  }
  }
}