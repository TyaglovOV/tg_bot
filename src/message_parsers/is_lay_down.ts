import TelegramBot = require('node-telegram-bot-api');

export function isLayDown(input: TelegramBot.Message) {
  if (!input.text) {
    return false
  }

  const newText = input.text.replace(/[^a-zA-Zа-яА-Я\s]/g, '').split(' ')

  if (newText && newText.length && newText[newText.length - 1].toLowerCase() === 'лежать' || input.text.toLowerCase().includes('буду лежать')) {
    return true
  }

  return false
}
