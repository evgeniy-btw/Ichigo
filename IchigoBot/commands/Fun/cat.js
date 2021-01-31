const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "cat",
  category: "Fun",
  description: "Случайное изображение кота",
  usage: "",
  run: async (client, message, args) => {


        async function work() {
        let owo = (await neko.sfw.meow());

        const cat = new Discord.MessageEmbed()
        .setTitle("Кошка")
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(cat);

}

      work();
}
                };