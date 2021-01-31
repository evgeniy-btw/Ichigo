const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "animelears",
  category: "Аниме",
  description: "Случайное Аниме изображение",
  usage: "animelears",
  run: async (client, message, args) => {


        async function work() {
        let owo = (await neko.sfw.kemonomimi());

        const animalears = new Discord.MessageEmbed()
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(animalears);

}

      work();
}
                };