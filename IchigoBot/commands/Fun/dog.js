const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "dog",
  category: "Fun",
  description: "Случайное изображение собаки",
  usage: "",
  run: async (client, message, args) => {


        async function work() {
        let owo = (await neko.sfw.woof());

        const dog = new Discord.MessageEmbed()
        .setTitle("Собака")
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(dog);

}

      work();
}
                };