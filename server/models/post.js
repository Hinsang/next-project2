module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { // 자동으로 MySQL에는 users 테이블 생성
  // id가 기본적으로 들어있음
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4', // DB에 한글, 이모티콘을 쓸 수 있게 해줌
    collate: 'utf8mb4_general_ci', // DB에 한글, 이모티콘을 쓸 수 있게 해줌
    // 두번째 객체는 모델에 대한 세팅
  });
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // Post모델은 User모델에 속해있다.
  };
  return Post;
}