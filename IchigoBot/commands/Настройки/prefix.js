const prefixModel = require("../../models/prefix")

module.exports= {
    name: "prefix",
    aliases: [],
    category: "Настройки",
   description: "Изменяет префикс бота",
   usage: "",
   run: async (client, message, args) => {
    const data = await prefixModel.findOne({
        GuildID: message.guild.id
    });

    if(!message.member.hasPermission('ADMINISTRATOR')) {
        return message.channel.send("У вас не достаточно прав.")
    }
    
    if (!args[0]) return message.channel.send('Вы должны написать **новый префикс**!');

    if (args[0].length > 5) return message.channel.send('Ваш новый префикс должен быть меньше \`5\` символов!')

    if (data) {
        await prefixModel.findOneAndRemove({
            GuildID: message.guild.id
        })
        
        message.channel.send(`Теперь ваш новый префикс **\`${args[0]}\`**`);

        let newData = new prefixModel({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    } else if (!data) {
        message.channel.send(`Теперь ваш новый префикс **\`${args[0]}\`**`);

        let newData = new prefixModel({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    }

}

}
