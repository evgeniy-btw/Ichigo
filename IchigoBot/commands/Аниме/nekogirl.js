const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "nekogirl",
  category: "Аниме",
  description: "Случайное изображение Кошкодевочки",
  usage: "",
  run: async (client, message, args) => {


        async function work() {
        let owo = (await neko.sfw.neko());

        const lizard = new Discord.MessageEmbed()
        .setTitle("Neko Girl")
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(lizard);

}

      work();
}
                };