import React, { useEffect } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
// import PostCard from '../components/PostCard';

const Board = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, [mainPosts]);
  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <div>피드백을 남겨주세요 (DB에 저장됩니다)</div>
      <br />
      {
        mainPosts && me
          ? <div />
          : <Link href="/Board/Post"><Button>글쓰기</Button></Link>
      }
      <br />
      <br />
      {/* { mainPosts.map((post) => <PostCard key={post.id} post={post} />)} */}
    </div>
  // mainPosts를 post로 받아서 PostCard에 props로 넘겨줌
  );
};

export default Board;
