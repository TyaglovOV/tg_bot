import TelegramBot = require('node-telegram-bot-api');
import { prepareWeatherInfo } from './weather_utils';

const axios = require('axios');

function getCityCoords(city: string) {
  if (!city) {
    return { lat: 44.816236, lon: 20.460467 }
  }

  switch (city.toLowerCase()) {
    case 'спб':
    case 'cg,':
    case 'питер':
    case 'gbnth':
    case 'санкт-петербург':
    case 'cfyrn-gtnth,ehu':
      return { lat: 59.93867493, lon: 30.31449318, }

    case 'мск':
    case 'vcr':
    case 'москва':
    case 'vjcrdf':
    case 'дс':
    case 'lc':
      return { lat: 55.75581741, lon: 37.61764526 }

    case 'нск':
    case 'ycr':
    case 'новосиб':
    case 'yjdjcb,':
    case 'сиб':
    case 'cb,':
    case 'новосибирск':
    case 'yjdjcb,bhcr':
      return { lat: 55.03020477, lon: 82.92043304 }

    case 'боржоми':
    case ',jh;jvb':
      return { lat: 41.84314728, lon: 43.38404846 }

    case 'белград':
    case ',tkuhfl':
      return { lat: 44.816236, lon: 20.460467 }
  }
}

export async function fetchWeatherRequest(msg: TelegramBot.Message) {
  const city = msg.text.split(' ')[1]

  if (msg.from.id !== 53400864) {
    if (!city) {
      return 'город не указан'
    }
  }

  const cityCoords = getCityCoords(city)

  try {
    const response = await axios.get('https://api.weather.yandex.ru/v2/forecast', {
      params: {
        ...cityCoords,
        lang: 'ru_RU',
        limit: 1
      },
      headers: {
        'X-Yandex-API-Key': process.env.YA_POGODA_KEY
      }
    })

    if (response.status !== 200) {
      throw 'error'
    }

    const result = prepareWeatherInfo(response.data)

    return result
  } catch (e) {
    console.log(e)
    return 'ошибка запроса'
  }
}
