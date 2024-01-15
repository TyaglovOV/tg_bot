import { isInstagram } from './message_parsers/instagram';
import { replaceInstagramLink } from './message_responses/instagram';

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.KEY;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  console.log(msg)
  const chatId = msg.chat.id;

  if (isInstagram(msg)) {
    bot.sendMessage(chatId, replaceInstagramLink(msg), {
      reply_to_message_id:  msg.message_id,
      disable_web_page_preview: false
    });
  }

  // send a message to the chat acknowledging receipt of their message
  // bot.sendMessage(chatId, 'Received your message123');
});
