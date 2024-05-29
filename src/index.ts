import { isDa } from './message_parsers/da';
import { isInstagram } from './message_parsers/instagram';
import { replaceInstagramLink } from './message_responses/instagram';
import { isAskForHelp } from './message_parsers/ask_for_help';
import { askForHelpResponse } from './message_responses/ask_for_help';
import { isAskForWeather } from './message_parsers/weather';
import { fetchWeatherRequest } from './message_responses/weather';
import { isMisrali } from './message_parsers/is_misrali';
import { isGpt } from './message_parsers/gpt';
import { sendRequest } from './message_responses/gpt';
import { isLayDown } from './message_parsers/is_lay_down'
import { layDownResponse } from './message_responses/lay_down_response'
import { isShower } from './message_parsers/shower';
import { showerResponse } from './message_responses/shower';

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
bot.on('message', async (msg) => {
  console.log(msg)
  const chatId = msg.chat.id;

  if (isInstagram(msg)) {
    bot.sendMessage(chatId, replaceInstagramLink(msg), {
      reply_to_message_id: msg.message_id,
      disable_web_page_preview: false
    });

    return
  }

  // if (isGpt(msg)) {
  //   bot.sendMessage(chatId, 'отправил, ждем', {
  //     reply_to_message_id: msg.message_id,
  //   });
  //
  //   const response = await sendRequest()
  //
  //   bot.sendMessage(chatId, response, {
  //     reply_to_message_id: msg.message_id,
  //   });
  //
  //   return
  // }

  if (isAskForWeather(msg)) {
    // const response = await fetchWeatherRequest(msg)

    bot.sendMessage(chatId, 'попробуй выглянуть в окно', {
      reply_to_message_id: msg.message_id,
    });

    return
  }

  if (isMisrali(msg)) {
    bot.sendMessage(chatId, '🤮', {
      reply_to_message_id: msg.message_id,
    });

    return
  }

  if (isDa(msg)) {
    if (Math.random() < 0.5) {
      bot.sendMessage(chatId, Math.random() < 0.5 ? 'пизда!' : 'pizda', {
        reply_to_message_id: msg.message_id,
      });
    }

    return
  }

  if (isAskForHelp(msg)) {
    bot.sendMessage(chatId, askForHelpResponse(msg), {
      reply_to_message_id: msg.message_id,
    });

    return
  }

  if (isLayDown(msg)) {
    bot.sendMessage(chatId, layDownResponse(msg), {
      reply_parameters: {
        message_id: msg.message_id,
        quote: 'лежать'
      }
    });

    return
  }

  if (isShower(msg)) {
    bot.sendMessage(chatId, showerResponse(msg), {
      reply_parameters: {
        message_id: msg.message_id,
        quote: 'в душ'
      }
    });

    return
  }
});
