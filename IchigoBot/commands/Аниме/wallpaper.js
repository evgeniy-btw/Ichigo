const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "wallpaper",
  category: "Аниме",
  description: "Случайное изображение обоев с Аниме",
  usage: "",
  run: async (client, message, args) => {


        async function work() {
        let owo = (await neko.sfw.wallpaper());

        const wallpaper = new Discord.MessageEmbed()
        .setTitle("Random Wallpaper")
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(wallpaper);

}

      work();
}
                };