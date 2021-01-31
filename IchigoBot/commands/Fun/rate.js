const Discord = require('discord.js')
const cooldown = new Set()
const utils = require('../../utils');

module.exports = {
  name: "rate",
  aliases: ["rate"],
  category: "Fun",
  description: "Позволяет оценить что-либо",
  usage: "",
run: async (client, message, args) => {

  
  if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username} Загрузка...`, message.author.displayAvatarURL)
    .setDescription(`Вам нужно подождать 5 секунд!`)
    .setColor(`RED`)
    .setFooter(`Это сообщение будет удалено через 5 секунд..`)
    return message.channel.send(cooldownemb).then(message => {
     message.delete(5000) 
    })
    
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
 let m421 = args.join(" ");
  if (!m421) return message.channel.send('Напишите что-нибудь.')
  if (m421.length > 30) return message.channel.send(`Я не могу оценить твоего беспризорника! Это более 30 сообщений!`)
  let result = Math.floor((Math.random() * 100) + 0);
  
    const happyrate = new Discord.MessageEmbed()
  .setDescription(`Я бы оценил **${m421}** ${result}/100 ?`)
  .setColor(`GREEN`)
    
      const sadembed = new Discord.MessageEmbed()
  .setDescription(`Я бы оценил **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
      
        const idkembed = new Discord.MessageEmbed()
  .setDescription(`Я бы оценил **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
        
      const shrugembed = new Discord.MessageEmbed()
  .setDescription(`Я бы оценил **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
                
          const okembed = new Discord.MessageEmbed()
  .setDescription(`Я бы оценил **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
                        
const thumbupembed = new Discord.MessageEmbed()
  .setDescription(`Я бы оценил **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)

const eyesembed = new Discord.MessageEmbed()
  .setDescription(`Я бы оценил **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)
  
  if (result > 90) return message.channel.send(happyrate)
  if (result < 30) return message.channel.send(sadembed)
  if (result > 40) return message.channel.send(idkembed)
  if (result > 50) return message.channel.send(shrugembed)
  if (result > 60) return message.channel.send(okembed)
  if (result > 70) return message.channel.send(thumbupembed)
  if (result > 80) return message.channel.send(eyesembed)
}
};