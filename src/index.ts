import { Client, Intents, Message } from 'discord.js';
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('message', (msg: Message) => {
  console.log("got msg from client with content: ", msg.content);
  if (msg.content === 'ping') {
    msg.reply('Pong 🏓');
  } else if (msg.content === 'hello') {
    msg.reply('Choo choo! 🚅');
  }
});

client.login();
