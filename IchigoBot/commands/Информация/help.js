const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const utils = require('../../utils');

module.exports = {
    name: "help",
    aliases: ["h"],
    category: "Информация",
    description: "Показывает все команды или информацию об одной команде.",
    usage: "",
    run: async (client, message, args) => {

        if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {

            return getAll(client, message);
        }
    }
}

function getAll(client, message) {
    const embed = new MessageEmbed()
        .setColor("#FCFF00")
        .setThumbnail("https://media.discordapp.net/attachments/749638503683326004/785203241029206036/ichigo_bot.png?width=619&height=619")
        .setTitle(`Команды ${client.user.username}`)
        .setFooter("Чтобы увидеть описание команды напишите: .help [Название команды]")
        

    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `\`${cmd.name}\``)
            .join(", ");
    }


    const info = client.categories
        .map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
        .reduce((string, category) => string + "\n" + category);



        

    return message.channel.send(embed.setDescription(info));
    
}

function getCMD(client, message, input) {
    const embed = new MessageEmbed()


    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
    
    let info = `Нету информации о команде: **${input.toLowerCase()}**`;


    if (!cmd) {
        return message.channel.send(embed.setColor("RED").setDescription(info));
    }


    if (cmd.name) info = `**Название команды**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Псевдонимы**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
    if (cmd.description) info += `\n**Описание**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Использование**: ${cmd.usage}`;
        embed.setFooter(`Syntax: <> = required, [] = optional`);
    }

    return message.channel.send(embed.setColor("GREEN").setDescription(info));
}