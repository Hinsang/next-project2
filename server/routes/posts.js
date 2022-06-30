const express = require('express');
const { Op } = require('sequelize');

const { Post, User } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /posts
  try {
    const where = {}; // 초기 로딩일 때, 조건이 없을 때 (아무런 데이터가 없을 때)
    // 사가에서 키와 값으로 넣어준 lastId 키값을 쿼리스트링으로 보내준게 req.query.lastId에 저장됨
    if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10)} // 조건이 lastId보다 작은걸 불러옴. 더 작은걸 불러오기 위해{ Op }를 sequalize에서 임포트한다. 그러고 [Op.lt]로 사용한다.
    }
    const posts = await Post.findAll({
      where, // limit으로 10개씩 불러오는데, [Op.lt]로 시퀄라이즈에서 더 작은 수의 lastId의 이전게시물을 불러옴
      limit: 10,
      order: [
        ['createdAt', 'DESC'], // 게시글 최신배열 정렬
      ], // 2차원 배열로 최신배열부터 불러오기
      include: [{
        model: User, // 게시글 작성자의 유저모델 추가
        attributes: ['id', 'nickname'], // 특정 속성만 가져오기
      }],
    });
    // console.log(posts);
    res.status(200).json(posts)
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;