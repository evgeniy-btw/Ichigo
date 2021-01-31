const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "nekogif",
  category: "Аниме",
  description: "Случайное анимированное изображение кошкодевочки",
  usage: "",
  run: async (client, message, args) => {


        async function work() {
        let owo = (await neko.sfw.nekoGif());

        const nekogif = new Discord.MessageEmbed()
        .setTitle("Neko Gif")
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(nekogif);

}

      work();
}
                };