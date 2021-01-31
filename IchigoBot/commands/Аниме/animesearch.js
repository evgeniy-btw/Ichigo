const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
  name: "animesearch",
  category: "Аниме",
description: "Находит информацию о любом Аниме",
usage: "animesearch - Название Аниме (На английском)",
run: async (client, message, args) => {

const search = `${args}`;
if(!search)
return message.reply('Пожалуйста, добавьте поисковый запрос, если недопустимая команда не будет работать.');

malScraper.getInfoFromName(search)
  .then((data) => {
  const malEmbed = new Discord.MessageEmbed()
    .setAuthor(`Результаты Поиска: ${args}`.split(',').join(' '))
    .setThumbnail(data.picture)
    .setColor('#FCFF00') 
    .addField('Английское Название', data.englishTitle, true)
    .addField('Японское Название', data.japaneseTitle, true)
    .addField('Тип', data.type, true)
    .addField('Эпизоды', data.episodes, true)
    .addField('Рейтинг', data.rating, true)
    .addField('Дата Выпуска', data.aired, true)
    .addField('Score', data.score, true)
    .addField('Score Stats', data.scoreStats, true)
    .addField('Ссылка', data.url);

    message.channel.send(malEmbed);

  })
}
};