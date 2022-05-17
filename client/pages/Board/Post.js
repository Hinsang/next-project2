import React from 'react';
import { useSelector } from 'react-redux';
import PostForm from '../../components/PostForm';

function Post() {
  const { me } = useSelector((state) => state.user);
  // const { logInDone } = useSelector((state) => state.user);

  return (
    <div>
      { me
        ? <PostForm />
        : <div style={{ width: '1000px', margin: '0 auto' }}>로그인 해주세요!!</div>}
      {/* { console.log(me) } */}
    </div>
  );
}

export default Post;
