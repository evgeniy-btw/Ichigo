const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "foxgirl",
  category: "Аниме",
  description: "Случайное FoxGirl изображение",
  usage: "",
  run: async (client, message, args) => {


        async function work() {
        let owo = (await neko.sfw.foxGirl());

        const foxGirl = new Discord.MessageEmbed()
        .setTitle("Fox Girl")
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(foxGirl);

}

      work();
}
                };