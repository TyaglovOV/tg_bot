import TelegramBot = require('node-telegram-bot-api');

export function isInstagram(msg: TelegramBot.Message) {
  const regex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/[a-zA-Z0-9_]+\/?/

  return regex.test(msg.text)
}
