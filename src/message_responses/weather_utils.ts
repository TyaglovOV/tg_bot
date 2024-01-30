const conditionMapping = {
  'clear': 'ясно',
  'partly-cloudy': 'малооблачно',
  'cloudy': 'облачно с прояснениями',
  'overcast': 'пасмурно',
  'light-rain': 'небольшой дождь',
  'rain': 'дождь',
  'heavy-rain': 'сильный дождь',
  'showers': 'ливень',
  'wet-snow': 'дождь со снегом',
  'light-snow': 'небольшой снег',
  'snow': 'снег',
  'snow-showers': 'снегопад',
  'hail': 'град',
  'thunderstorm': 'гроза',
  'thunderstorm-with-rain': 'дождь с грозой',
  'thunderstorm-with-hail': 'гроза с градом'
}

type WeatherType = {
  info: {
    url: string,
  },
  geo_object: {
    locality: {
      name: string,
    },
    province: {
      name: string
    },
    country: {
      name: string,
    }
  },
  fact: {
    temp: number,
    feels_like: number,
    condition: keyof typeof conditionMapping,
    wind_speed: number,
    humidity: number
  },
  forecasts: {
  }[]
}

export function prepareWeatherInfo(data: WeatherType) {
  const local = data.geo_object.locality?.name || data.geo_object.province?.name

  try {
    return `Погода в г. ${local === 'округ Белград' ? 'Белград' : local}, ${data.geo_object.country.name}: за окном ${conditionMapping[data.fact.condition]}, температура ${data.fact.temp}°C, ощущается как ${data.fact.feels_like}°C, ветер ${data.fact.wind_speed} м/с, влажность ${data.fact.humidity}%`
  }
  catch (e) {
    return 'ошибка парсинга данных'
  }
}
