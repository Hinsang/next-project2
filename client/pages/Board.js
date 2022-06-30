import React, { useEffect } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
// import { END } from 'redux-saga';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
// import PostCard from '../components/PostCard';
import PostCard from '../components/PostCard';
// import wrapper from '../configure/configure';
// import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

const Board = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mainPosts.length === 0) {
      dispatch({
        type: LOAD_POSTS_REQUEST,
      });
      // dispatch({
      //   type: LOAD_MY_INFO_REQUEST,
      // });
    }
  }, []); // 페이지를 재 랜더링하면 mainPost를 받아오기전에 이 useEffect를 실행해버리니까 문제가 생기는 것 같다.
  // 그래서 mainPosts.length 길이가 0일때(없을 때) 한번만 실행하게 했더니 문제가 해결되었다.

  useEffect(() => {
    function onScroll() {
      // eslint-disable-next-line max-len
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);
  // loadPostsLoading을 같이 넣어줘야 여러번 호출하는걸 방지할 수 있다. (이거때매 시간 엄청 날렸다..ㅠㅠ)

  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      {
        me
          ? (
            <div><div style={{ fontSize: '16px', fontWeight: 700 }}>피드백을 남겨주세요 (DB에 저장됩니다, 삭제가능)</div>
              <br />
              <Link href="/Board/Post"><Button>글쓰기</Button></Link>
            </div>
          )
          : <div style={{ fontSize: '16px', fontWeight: 700 }}>글을 작성하려면 로그인 해주세요!!</div>
      }
      <br />
      <br />
      { mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  // mainPosts를 post로 받아서 PostCard에 props로 넘겨줌
  // ADD_POSTS_SUCCESS와 LOAD_POSTS_SUCCESS의 리턴값을 동일하게 받아야 표시된다. (여기서 시간 많이 썼다..ㅠㅠ)
  );
};

export default Board;
