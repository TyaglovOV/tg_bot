import TelegramBot = require('node-telegram-bot-api');

export function isShower(input: TelegramBot.Message) {
  if (input.from.id === 53400864) {
    return false
  }

  if (!input.text) {
    return false
  }

  const newText = input.text.replace(/[^a-zA-Zа-яА-Я\s]/g, '')

  if (newText && (newText.includes('пойду в душ') || newText.includes('хочу в душ') || newText.includes('я в душ'))) {
    return true
  }

  return false
}
