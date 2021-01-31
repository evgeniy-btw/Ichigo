module.exports = {
        name: "clear",
        aliases: ["delete", "purge", 'prune'],
        category: "Модерация",
        description: "Удалить сообщения",
        usage: "",

    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У тебя нет прав!- [MANAGE_MESSAGES]")
        if (isNaN(args[0]))
            return message.channel.send('Укажите сколько сообщений нужно удалить!');

        if (args[0] > 100)
            return message.channel.send("Укажите число меньше 100");

        if (args[0] < 1)
            return message.channel.send("Укажите число больше 1");

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**Успешно удалено \`${messages.size}/${args[0]}\` сообщений**`).then(msg => msg.delete({ timeout: 2000 }))).catch(() => null)
    }
}