import TelegramBot = require('node-telegram-bot-api');

export function askForHelpResponse(msg: TelegramBot.Message) {
  return 'советую поменьше стрессовать: спать стабильные 8 часов (минимум), питаться по режиму и вообще стараться вести образ жизни размеренный. Вставать по утрам в одно и то же время, заиметь маленькие ритуалы, типа бритья опасным лезвием или ручной заточки ножей. исключить смартфоны после 8 вечера, исключить алкоголь (вообще, в принципе), ходить регулярно в спортзал, причем не гнаться за большими весами, чтобы не растянуть и не повредить себе ничего: ведь в этом случае придется восстанавливаться неделю, а то и две.\n' +
    'стараться не питаться плохими продуктами, а питаться хорошими: не есть заведомо жирное, соленое, острое, лучше опять таки выбрать средиземноморскую диету, богатую белками животного происхождения и овощами, фруктами.\n' +
    'чтобы было на это много денег, советую побольше зарабатывать: регулярно проверять актуальные вакансии, иногда ходить на собеседования, чтобы проверить в какую сторону движется твоя  профессия. советую обрастать полезными связями: согласно опросам, наиболее денежные вакансии отдают знакомым, в плохие конторы знакомых не зовут, а зовут в хорошие. \n' +
    'советую найти такую работу, чтобы платили много, при этом задач было мало, этим ты убьешь сразу двух зайцев - денег будет много и времени свободного - тоже много. \n' +
    '\n' +
    'если что, спрашивай, я подскажу, как тебе обустроить свою жизнь'
}