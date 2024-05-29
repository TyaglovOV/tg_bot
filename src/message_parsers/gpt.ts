import TelegramBot = require("node-telegram-bot-api");

export function isGpt(input: TelegramBot.Message) {
  if (!input.text) {
    return false
  }

  const command = input.text.split(' ')[0]

  if (!command) {
    return false
  }

  if (command.toLowerCase() === '!жпт' || command.toLowerCase() === '!gpt') {
    return true
  }

  return false
}
