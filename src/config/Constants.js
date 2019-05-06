const Constants = {
  base_picture:
    'https://media.balls.ie/uploads/2014/10/US_Sassuolo_Calcio_logo.svg_.png',
  base_profile:
    'https://www.ekahiornish.com/wp-content/uploads/2018/07/default-avatar-profile-icon-vector-18942381.jpg',
  event_picture:
    'https://images.vexels.com/media/users/3/153916/isolated/lists/c10e8d00b250c7051474d6b4c08ee3a6-icone-de-traco-colorido-trofeu-esportes.png',
  dev_url: 'http://192.168.1.14:3333',
  prod_url: 'http://heroku.esportesapi.com',
  debug: true,
  connectionstring_dev:
    'mongodb://127.0.0.1:27017/esportesdev2?retryWrites=true', // o serviço local mongo deve estar rodando
  connectionstring_prod:
    'mongodb+srv://master:1234@cluster0-cygis.mongodb.net/esportesdev?retryWrites=true',
  limite_registros_por_pagina: 10
}

module.exports = Constants
