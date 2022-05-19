const dotenv = require('dotenv');

dotenv.config();

module.exports = { // json 파일이면 dotenv를 못쓰므로 js파일로 바꿔주고 module.exports를 붙여줌
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: '',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: '',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: '',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
// 지금은 DB 비밀번호 설정을 안해놓아서 그냥 null로 비워놓았음