import React from 'react'

const sendMessageToTelegram = (message) => {
    const token = '6330394492:AAGxx4iEDLpWo3D22h-BEx9ZWilMLkoe72M';
    const chatId = '1094206968';

    const bot = new TelegramBot(token, {
        polling: false
    });
    bot.sendMessage(chatId, message);
};

export default sendMessageToTelegram;