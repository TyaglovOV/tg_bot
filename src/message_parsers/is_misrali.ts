import TelegramBot = require("node-telegram-bot-api");

export function isMisrali(input: TelegramBot.Message) {
  if (!input.text) {
    return false
  }

  if (input.text.toLowerCase().includes('мисрали')) {
    return true
  }

  return false
}

