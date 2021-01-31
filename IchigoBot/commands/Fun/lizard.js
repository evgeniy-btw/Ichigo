const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "lizard",
  category: "Fun",
  description: "Случайное изображение ящерицы",
  usage: "[command]",
  run: async (client, message, args) => {


        async function work() {
        let owo = (await neko.sfw.lizard());

        const lizard = new Discord.MessageEmbed()
        .setTitle("Ящерица")
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(lizard);

}

      work();
}
                };