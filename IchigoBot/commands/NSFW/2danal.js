const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "2danal",
  category: "NSFW",
  usage: "",
  run: async (client, message, args) => {

  var errMessage = "Это не 18+ текстовый канал";
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 3000 })
      })
      
  }

        async function work() {
        let owo = (await neko.nsfw.anal());

        const anal = new Discord.MessageEmbed()
        .setTitle("2D Anal")
        .setImage(owo.url)
        .setColor(`#FCFF00`)
        .setURL(owo.url);
        message.channel.send(anal);

}

      work();
}
                };