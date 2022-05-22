const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');
// const postRouter = require('./routes/post');
// const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config(); // dotenv 리콰이어해서 back폴더의 .env 호출

db.sequelize.sync().then(() => {
  console.log('db 연결 성공')
}).catch(console.error) // 서버 실행할때 DB 시퀄라이즈 연결

// 많이 쓰는 명령어
// app.get -> 가져오다
// app.post -> 생성하다
// app.put -> 전체 수정
// app.delete -> 삭제
// app.patch -> 부분 수정
// app.options -> 선택 찔러보기
// app.head -> 헤더만 가져오기

app.use(express.json()); // 프론트에서 받은 json 형식의 데이터를 req.body로 넣어주는 역할
app.use(express.urlencoded({ extended: true })); // 프론트에서 받은 폼데이터를 req.body로 넣어주는 역할

passportConfig(); // passport 폴더 실행

if (process.env.NODE_ENV === "proudction") {
  app.use(morgan('combined')); // 배포 모드일때 로그가 자세해짐. 접속자의 ip도 알 수 있음
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan('dev'));
}
app.use(cors({
  origin: ['http://localhost:3060', 'next-project.com', 'http://54.180.8.15'], // credentials가 true일 경우 정확한 프론트 주소를 입력해준다.
  credentials: true, // 도메인간에 쿠키 전달 (front saga에도 withCredentials: true 설정을 해주어야 한다.)
}));
app.use('/', express.static(path.join(__dirname, 'uploads'))) // express가 uploads폴더를 프론트에 제공
// '/'는 백엔드 호스트, __dirname 현재 위치하는 폴더에 uploads폴더를 합쳐줌. 운영체제마다 경로가 다르므로 노드에서 제공하는 path.join을 사용함
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    // httpOnly: true,
    secure: false,
    // sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax',
    // secure: process.env.NODE_ENV === "production",
  }
}));
app.use(passport.initialize());
app.use(passport.session());
// 라우터들보다 상단에 위치시켜야함


app.get('/', (req, res) => {
  res.send('hello express');
});

// router.get('/', function(req, res, next) {
  //   res.status(200).json({
    //       message:"백엔드 서버입니다.",
    //   })
    // });
    
    // app.use('/post', postRouter);
    // app.use('/posts', postsRouter);
    app.use('/user', userRouter);
    
    // app.use((err, req, res, next) => {
      
      // }); // 에러처리 미들웨어는 내부적으로 잠재되어있지만 이렇게 4개의 매개변수로 따로 값을 변경해줄 수 있다.
      
      app.listen(3065, () => {
        console.log('서버 실행 중');
      });