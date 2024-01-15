import TelegramBot = require("node-telegram-bot-api");

export function replaceInstagramLink(inputString: TelegramBot.Message) {
  const instagramRegex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/[a-zA-Z0-9_]+\/?/

  const match = inputString.text.match(instagramRegex)

  const result = match[0].replace(/(https?:\/\/(?:www\.)?instagram\.com\/)([a-zA-Z0-9_]+\/?)/, 'https://www.ddinstagram.com/$2');

  return result;
}
