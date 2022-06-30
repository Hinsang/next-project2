const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User } = require('../models'); // models에 있는 User모델 구조분해할당
// const { response } = require('express');
// const db = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => {
  // console.log(req.headers); // headers안에 쿠키가 들어있음. 쿠키 확인하기
  try{
    if (req.user) { // 로그인 상태일때만 user 정보를 보내준다.
      const fullUserWithoutPassword = await User.findOne({ // 비밀번호 없는 유저정보를 넘겨줌(보안강화)
        where: { id: req.user.id }, // user id를 찾는다.
        attributes: {
          exclude: ['password'] // exclude 안의 정보만 빼고 받는다.
        }, // 여기에 입력한 속성만 받는다.
        // include: [{ // include로 필요한 관계 DB를 기존 DB에 포함한다.
        //   model: Post,
        //   attributes: ['id'], // id 속성만 포함한다.
        // }]
      })
      return res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null); // 로그인 상태가 아니라면 아무것도 보내주지 않는다.
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => { // 패스포트에서는 req, res, next 못쓰니까 미들웨어 확장
  passport.authenticate('local', (err, user, info) => { // 서버에러, 성공객체, 클라이언트에러
    if (err) {
      console.error(err);
      return next(err); // next(err)는 바로 에러처리 미들웨어로 넘어감
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr); // 패스포트에서 로그인 실패시 에러 출력
      }
      const fullUserWithoutPassword = await User.findOne({ // 비밀번호 없는 유저정보를 넘겨줌(보안강화)
        where: { id: user.id }, // user id를 찾는다.
        attributes: {
          exclude: ['password'] // exclude 안의 정보만 빼고 받는다.
        }, // 여기에 입력한 속성만 받는다.
        // include: [{ // include로 필요한 관계 DB를 기존 DB에 포함한다.
        //   model: Post,
        //   attributes: ['id'],
        // }]
        // include: [{
        //   model: Post,
        //   include: [{
        //     model: User,
        //     attributes: ['nickname'],
        //   }]
        // }]
      })
      return res.status(200).json(fullUserWithoutPassword); // 패스포트에서도 로그인 에러가 없을 시 user 데이터를 json 형식으로 프론트에 넘겨줌 (action.data)
    }); // 성공시 req.login으로 로그인
  })(req, res, next);
}); // POST /user/login로 패스포트의 done결과값이 전달됨

router.post('/signup', isNotLoggedIn, async (req, res, next) => { // POST /user
  try {
    const exUser = await User.findOne({
      where: {
        nickname: req.body.nickname,
      } // 조건은 where안에다 넣어줌
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      nickname: req.body.nickname,
      password: hashedPassword,
    })
    res.status(201).send('ok'); // 잘 생성됨
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout(); // 패스포트 로그아웃
  req.session.destroy(); // 세션 제거
  res.send('ok') // 완료 표시
});

module.exports = router;