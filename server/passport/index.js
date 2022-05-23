const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.nickname) // 암호화 쿠키와 묶어줄 아이디 정보 저장
  });

  passport.deserializeUser(async (nickname, done) => {
    try {
      const user = await User.findOne({ where: { nickname } }) // 쿠키에 묶인 아이디 정보로 사용자 데이터 복원 (이후의 서버요청마다 필요시 복원)
      done(null, user); // 서버에러, 성공 // 이 부분이 유저정보를 req.user로 변환함
    } catch (error) {
      console.error(error);
      done(error) // 패스포트는 next대신 done으로 에러처리
    }
  });

  local(); // LocalStrategy 부분 받아서 실행
}