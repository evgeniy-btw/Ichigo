const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports= {
    name: "bugreport",
    aliases: ["bug","report","bugrep"],
    category: "Информация",
   description: "Сообщить о ошибке",
   usage: "",

 run: async (client, message, args) => {
    if (!args[0]) return message.channel.send("Опишите ошибку")
let bug = args.join(" ").slice(0);
let user = message.author.username;
let id = message.author.id;
let guild = message.guild.name;
let channel = client.channels.cache.get("792168711749894174")
let embed = new MessageEmbed()
.setTitle("Bug Report")
.setThumbnail()
.addField("Ошибка", bug)
.addField("Пользователь", user, id)
.addField("ID", id)
.addField("Сервер", guild)
.setColor("#f49542")
message.channel.send("**| Ваш запрос был отправлен на официальный сервер. В скором времени мы расмотрим вашу заявку и исправим ошибку, так что пожалуйста наберитесь терпения.**")
channel.send(embed).then(i => i.react("⏳"))

  


}}
