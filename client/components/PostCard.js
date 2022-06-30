import React, { useCallback } from 'react';
import { Button, Card } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
// import PostImages from './PostImages';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import { END } from 'redux-saga';
import styles from './PostCard.module.css';
import wrapper from '../configure/configure';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { REMOVE_POST_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const dispatch = useDispatch();

  // eslint-disable-next-line implicit-arrow-linebreak
  // if (me.id) {
  //   console.log(id);
  // }

  const remove = useCallback(() => {
    if (!id) {
      return alert('로그인 해주세요!!');
    }
    return dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  return (
    <div>
      <Card
        className={styles.card}
        // cover={post.Images[0] && <PostImages images={post.Images} />}
        action={<HeartOutlined key="heart" />}
      >
        <div style={{ float: 'right' }}>{moment(post.createdAt).format('YYYY.MM.DD')}</div>
        <div style={{ fontSize: 15, fontWeight: 700 }}>작성자 : {post.User.nickname}</div>
        <div style={{ fontSize: 15, fontWeight: 700 }}>제목 : {post.title}</div>
        <Card.Meta
          // title={post.title}
          description={post.description}
          style={{ marginTop: 10, fontSize: 16, color: 'black', fontWeight: 600 }}
        />
        <Button.Group style={{ marginTop: 10 }}>
          {id && post.User.id === id ? (
            <div>
              {/* <Button style={{ marginRight: 10 }}>수정</Button> */}
              <Button style={{ borderRadius: '2px' }} type="danger" onClick={remove}>삭제</Button>
            </div>
          ) : <div />}
        </Button.Group>
      </Card>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    User: PropTypes.object,
    // Images: PropTypes.arrayOf(PropTypes.object),
    description: PropTypes.string,
    createdAt: PropTypes.string,
    // 객체들의 배열
  }).isRequired,
  // object보다 shape는 더 자세하게 속성을 정의할 수 있다.
};

export default PostCard;
