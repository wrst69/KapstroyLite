const telegramApi = require('node-telegram-bot-api');

const token = '5383698312:AAEMPTlTyvi0K7gAcNqo3blsf7754yhO9IM';

const bot = new telegramApi(token, { polling: true });

bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Ты написал мне ${text}`);
});
