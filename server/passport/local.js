const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local'); // Strategy 구조분해할때 변수 변경
const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'nickname', // req.body.nickname
    passwordField: 'password',
  }, async (nickname, password, done) => { // done으로 결과 판단
    try {
      const user = await User.findOne({
        where: { nickname } // { email: email }
      });
      if (!user) {
        done(null, false, { reason: '존재하지 않는 사용자입니다!' }) // 서버에러, 성공여부, 클라이언트에러
      }
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        return done(null, user)
      }
      return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
    } catch (error) {
      console.error(error);
      return done(error);
    }
  }));
};