import TelegramBot = require("node-telegram-bot-api");

export function isAskForHelp(input: TelegramBot.Message) {
  if (input.text === '!совет') {
    return true
  }

  return false
}
