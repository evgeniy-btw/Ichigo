module.exports = {
    run: async function (req, res) {
        return res.status(200).json({
            size: {
                16: "https://media.discordapp.net/attachments/749638503683326004/792830561432764416/ichigo_ny.png",
                32: "https://media.discordapp.net/attachments/749638503683326004/785203241029206036/ichigo_bot.png?size=32",
                64: "https://media.discordapp.net/attachments/749638503683326004/785203241029206036/ichigo_bot.png?size=64",
                128: "https://media.discordapp.net/attachments/749638503683326004/785203241029206036/ichigo_bot.png?size=128",
                256: "https://media.discordapp.net/attachments/749638503683326004/785203241029206036/ichigo_bot.png?size=256",
                512: "https://media.discordapp.net/attachments/749638503683326004/785203241029206036/ichigo_bot.png?size=512",
                1024: "https://media.discordapp.net/attachments/749638503683326004/785203241029206036/ichigo_bot.png?size=1024",
                2048: "https://media.discordapp.net/attachments/749638503683326004/785203241029206036/ichigo_bot.png?size=2048",
                4096: "https://media.discordapp.net/attachments/749638503683326004/785203241029206036/ichigo_bot.png?size=4096"
            }
        });
    }
}