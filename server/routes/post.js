const express = require('express');
const multer = require('multer');
const path = require('path'); // 노드에서 제공하는 설치 안해도되는 모듈 (이름, 확장자 추출)
const fs = require('fs'); // 노드에서 자체적으로 파일 생성 삭제 등을 도와주는 모듈
const { Post, Image, Comment, User, Hashtag } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

// try {
//   fs.accessSync('uploads') // upload 폴더에 접근
// } catch (error) { // 없으면 에러
//   console.log('uploads 폴더가 없으므로 생성합니다.');
//   fs.mkdirSync('uploads');
// }

// const upload = multer({
//   storage: multer.diskStorage({ // 하드디스크에 저장
//     destination(req, file, done) {
//       done(null, 'uploads'); // uploads 폴더에 저장
//     },
//     filename(req, file, done) { // 제로초.png
//       const ext = path.extname(file.originalname); // path모듈을 통해 확장자 추출(.png)
//       const basename = path.basename(file.originalname, ext); // 제로초
//       done(null, basename + '_' + new Date().getTime() + ext) // 이름 + 시간 + 확장자 넣어줌으로써 중복파일일 때 덮어쓰는 것을 방지한다.
//     }
//   }),
//   limits: { fileSize: 20 * 1024 * 1024 } // 20MB로 용량 제한
// });

router.post('/', isLoggedIn, async (req, res, next) => { // POST /post
  try { // text만 있으므로 미들웨어로 upload.none()을 사용한다.
    // const hashtags = req.body.content.match(/#[^|s#]+/g); // 정규표현식으로 해쉬태그 저장
    const post = await Post.create({
      UserId: req.user.id,
      title: req.body.title, // 로그인 이후 패스포트 deserializeUser의 req.user.id를 User.id에 넣어줌
      description: req.body.description,
    }); // post모델에 저장
    // if (hashtags) {
    //   const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
    //     where: { name: tag.slice(1).toLowerCase() }, // findOrCreate를 쓰면 where조건에 넣어주어야 한다.
    //   }))); // findOrCreate는 create와 다르게 이미 있을경우 생성하지 않는다. slice(1)로 앞에 해쉬태그 때주고, toLowerCase()는 소문자로 만들어줌
    //   // 결과값이 [[노드, true], [리액트, true]] 처럼 boolean 값으로 표현됨
    //   await post.addHashtags(result.map((v) => v[0])); // 위에 결과값에서 boolean값을 뺀 데이터값만 가져오기 위해 배열의 0번째를 가져온다.
    // }
    // if (req.body.image) { // action data를 req.body로 받음 (이미지가 있을 경우)
    //   if (Array.isArray(req.body.image)) { // 이미지를 여러 개 올리면 image: [제로초.png, 부기초.png] (배열)
    //     const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image }))); // 이미지 모델에 이미지이름 src생성 (promise상태로 실행이 완료되지 않은 객체이므로 Promise.all로 한방에 저장한다.)
    //     // 파일이 아닌 파일 주소만 가지고 있고, 멀터로 하드디스크의 uploads폴더에 이미지 저장한 상태
    //     await post.addImages(images); // post의 관계형 모델인 image모델에 post.addImages로 images 추가
    //   } else { // 이미지를 하나만 올리면 image: 제로초.png
    //     const image = await Image.create({ src: req.body.image });
    //     await post.addImages(image);
    //   }
    // }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: User, // 게시글 작성자
        attributes: ['id', 'nickname'],
      }] // 생성한 post 모델에 추가할 모델정보를 배열안에 넣어줌
    })
    res.status(201).json(fullPost); // DB에 저장하고 필요한 모델을 추가하고, 그 값을 프론트로 다시 돌려준다.
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 위에서 만든 multer를 upload 변수에 넣고 미들웨어로 미리 실행한다.
// router.post('/images', isLoggedIn, upload.array('image'), async (req, res, next) => { // Post /post/images
//   // upload.array('image')의 'image'는 front 폼의 name을 의미함. 그 폼으로부터 데이터를 받아옴.
//   // 여러장 .array 한장 .single 텍스트만있으면 .none
//   console.log(req.files);
//   res.json(req.files.map((v) => v.filename)); // 업로드된 파일들의 이름을 프론트로 전달
// }); // 2번째는 미들웨어, 3번째 파라미터인 upload.array('image')의 배열안에 multer처리된 여러장의 이미지 폼데이터가 들어감

// router.get('/:postId', async (req, res, next) => { // GET /post/1
//   try {
//     const post = await Post.findOne({
//       where: { id: req.params.postId },
//     });
//     if (!post) {
//       return res.status(404).send('존재하지 않는 게시글입니다.');
//     }
//     const fullPost = await Post.findOne({
//       where: { id: post.id }, // 리트윗 id가 있다면
//       include: [{
//         model: Post,
//         as: 'Retweet',
//         include: [{
//           model: User,
//           attributes: ['id', 'nickname'],
//         }, {
//           model: Image,
//         }],
//       }, { // 어떤 게시글을 리트윗했는지 포함해서 찾아준다.
//         model: User,
//         attributes: ['id', 'nickname'],
//       }, {
//         model: User,
//         as: 'Likers',
//         attributes: ['id', 'nickname'],
//       }, {
//         model: Image,
//       }, {
//         model: Comment,
//         include: [{
//           model: User,
//           attributes: ['id', 'nickname'],
//         }],
//       }, {
//           model: User,
//           as: 'Likers',
//           attributes: ['id'],
//         },
//       ],
//     }) // 전체 리트윗 게시글 완성시켜서 보내줌 (관계형으로 엮여있는 것들 싹다 가져옴)
//     res.status(200).json(fullPost); // DB에 저장하고 그 값을 프론트로 다시 돌려준다.
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// });

// router.post('/:postId/retweet', isLoggedIn, async (req, res, next) => { // POST /post
//   try {
//     const post = await Post.findOne({
//       where: { id: req.params.postId },
//       include: [{
//         model: Post,
//         as: 'Retweet',
//       }]
//     });
//     if (!post) {
//       return res.status(403).send('존재하지 않는 게시글입니다.');
//     }
//     if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) { // 리트윗한 사람이 자신이라면 또는 남이 리트윗한 게시글이 있고 그 아이디가 자기 자신이라면 
//       return res.status(403).send('자신의 글은 리트윗할 수 없습니다.');
//     }
//     const retweetTargetId = post.RetweetId || post.id;
//     const exPost = await Post.findOne({
//       where: {
//         UserId: req.user.id,
//         RetweetId: retweetTargetId,
//       },
//     }); // 다른사람이 리트윗한 경우 
//     if (exPost) { // 이미 리트윗이 있는 경우 (중복 리트윗 방지)
//       return res.status(403).send('이미 리트윗 했습니다.');
//     }
//     const retweet = await Post.create({
//       UserId: req.user.id,
//       RetweetId: retweetTargetId,
//       content: 'retweet',
//     })
//     const retweetWithPrevPost = await Post.findOne({
//       where: { id: retweet.id }, // 리트윗 id가 있다면
//       include: [{
//         model: Post,
//         as: 'Retweet',
//         include: [{
//           model: User,
//           attributes: ['id', 'nickname'],
//         }, {
//           model: Image,
//         }],
//       }, { // 어떤 게시글을 리트윗했는지 포함해서 찾아준다.
//         model: User,
//         attributes: ['id', 'nickname'],
//       }, {
//         model: Image,
//       }, {
//         model: Comment,
//         include: [{
//           model: User,
//           attributes: ['id', 'nickname'],
//         }],
//       }, {
//           model: User,
//           as: 'Likers',
//           attributes: ['id'],
//         },
//       ],
//     }) // 전체 리트윗 게시글 완성시켜서 보내줌 (관계형으로 엮여있는 것들 싹다 가져옴)
//     res.status(201).json(retweetWithPrevPost); // DB에 저장하고 그 값을 프론트로 다시 돌려준다.
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// });
// 
// router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { // POST /post
//   try {
//     const post = await Post.findOne({
//       where: { id: req.params.postId },
//     });
//     if (!post) {
//       return res.status(403).send('존재하지 않는 게시글입니다.');
//     }
//     const comment = await Comment.create({
//       content: req.body.content,
//       PostId: parseInt(req.params.postId, 10), // req.params는 문자열이므로 타입을 숫자로 변경시켜줌 // 2번째 인자값은 10진법을 나타냄
//       UserId: req.user.id,
//     }) // comment 모델에 추가
//     const fullComment = await Comment.findOne({
//       where : { id: comment.id },
//       include: [{
//         model: User,
//         attributes: ['id', 'nickname'],
//       }],
//     }) // 프론트에 넘겨줄 데이터
//     res.status(201).json(fullComment); // DB에 저장하고 그 값을 프론트로 다시 돌려준다.
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// });
// 
// router.patch('/:postId/like', isLoggedIn, async(req, res, next) => { // PATCH /post/1/like
//   try {
//     const post = await Post.findOne({ where: { id: req.params.postId } })
//     if (!post) {
//       return res.status(403).send('게시글이 존재하지 않습니다.');
//     }
//     await post.addLikers(req.user.id); // 관계형 DB에서 생성된 addLikers에 req.user.id를 저장함
//     res.json({ PostId: post.id, UserId: req.user.id }); // 프론트에 보내줌
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// })
// 
// router.delete('/:postId/like', isLoggedIn, async (req, res, next) => { // DELETE /post/1/like
//   try {
//     const post = await Post.findOne({ where: { id: req.params.postId } })
//     if (!post) {
//       return res.status(403).send('게시글이 존재하지 않습니다.');
//     }
//     await post.removeLikers(req.user.id); // 관계형 DB에서 생성된 addLikers에 req.user.id를 저장함
//     res.json({ PostId: post.id, UserId: req.user.id }); // 프론트에 보내줌
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// })

router.delete('/:postId', isLoggedIn, async (req, res, next) => { // DELETE /post
  try {
    await Post.destroy({
      where: {
        id: req.params.postId,
        UserId: req.user.id, // 내가 쓴 게시글일때만 지울 수 있게해줌
      },
    }); // 시퀄라이즈에서 destroy로 제거한다.
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
    // params는 parsInt로 문자열에서 숫자로 변환해서 프론트로 보내줘야함 (10은 10진법)
    // 이 부분에서 보낸 PostId는 프론트 리듀서에서 필터로 남은 게시글을 걸러줄때 필요하다.
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;