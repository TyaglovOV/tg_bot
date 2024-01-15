import TelegramBot = require("node-telegram-bot-api");

export function replaceInstagramLink(inputString: TelegramBot.Message) {
  const instagramRegex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/[a-zA-Z0-9_]+\/?/

  const match = inputString.text.match(instagramRegex)

  const result = match.input.replace(/(https?:\/\/(?:www\.)?instagram\.com\/)([a-zA-Z0-9_]+\/?)/, 'https://ddinstagram.com/$2').match(/\b(?:https?|ftp):\/\/[^\s]+\/\S+\b/)

  if (result) {
    return result[0]
  }

  return result;
}
