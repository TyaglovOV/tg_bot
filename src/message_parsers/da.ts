import TelegramBot = require("node-telegram-bot-api");

export function isDa(input: TelegramBot.Message) {
  const newText = input.text.replace(/[^a-zA-Zа-яА-Я\s]/g, '').split(' ')

  if (newText && newText.length && newText[newText.length - 1].toLowerCase() === 'да') {
    return true
  }

  return false
}
