require('dotenv').config()

const { Client, Intents, Message } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = "?"


client.on('ready', () => {
    console.log('The bot Has Logged In....')
})

var time = []

client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ + /)
    const command = args.shift().toLowerCase();

    if (command === 'send_message') {
        message.channel.send('Hello!')
    }

    if (command === "start_dev") {
        console.log(message.author.username)
        time.push(message.author.username + '-' + Date.now());
        console.log(new Date().getSeconds())
        console.log(time)

        message.channel.send(message.author.username + ' Has Logged Into Studio!')

    }

    if (command === "stop_dev") {
        var hufrefre = 0
        for (i = 0; i < time.length; i++) {
            const value = time[i]
            const final = value.split('-')[0]
            console.log(final)
            if (final === message.author.username) {
                console.log('yes')
                console.log(new Date(parseInt(value.split('-')[1])).getTime())
                console.log(new Date().getTime())
                hufrefre = new Date(new Date().getTime() - new Date(parseInt(value.split('-')[1])).getTime())
                time.splice(i)
                console.log(time)
            }
        }



        console.log(new Date().getSeconds())
        console.log(hufrefre.getSeconds())
        console.lo
        message.channel.send(message.author.username + ' Has Logged Out Of Studio and has spent ' + hufrefre.getSeconds() + " seconds in it!")
    }


    if (command === "mute") {

    }
})

client.login(process.env.DISCORDJS_BOT_TOKEN)
