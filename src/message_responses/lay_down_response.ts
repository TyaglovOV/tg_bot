import TelegramBot = require("node-telegram-bot-api");

export function layDownResponse(inputString: TelegramBot.Message) {
  return Math.random() < 0.5 ? 'в кроватоньке?' : 'плюс сосать'
}
