module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // 자동으로 MySQL에는 users 테이블 생성
    // id가 기본적으로 들어있음
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false, // 필수 입력값인지 아닌지 여부 (false는 필수)
      unique: true, // DB에서 고유한 값
    },
    password: {
      type: DataTypes.STRING(100), // 비밀번호 암호화 때문에 늘려놓음
      allowNull: false
    },
  }, {
    charset: 'utf8', // DB에 한글을 쓸 수 있게 해줌
    collate: 'utf8_general_ci', // DB에 한글을 쓸 수 있게 해줌
    // 두번째 객체는 모델에 대한 세팅
  });
  User.associate = (db) => {
    db.User.hasMany(db.Post); // User모델에서 Post모델을 여러개 가지고있다.
  };
  return User;
}