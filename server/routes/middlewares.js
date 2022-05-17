exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) { // isAuthenticated()는 패스토프에서 제공하는 기능으로 true면 로그인 상태이다.
    next(); // 그냥 next()만 넣으면 에러처리가 아닌 다음 미들웨어로 이동함.
  } else {
    res.status(401).send('로그인이 필요합니다.');
  }
}

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인하지 않은 사용자만 접근 가능합니다.');
  }
}