import TelegramBot = require("node-telegram-bot-api");

export function isMisrali(input: TelegramBot.Message) {
  if (input.text.toLowerCase() === 'мисрали') {
    return true
  }

  return false
}
