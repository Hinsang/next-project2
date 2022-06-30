import React from 'react';
import { useSelector } from 'react-redux';
// import { useRouter } from 'next/router';
import PostForm from '../../components/PostForm';

function Post() {
  const { me } = useSelector((state) => state.user);
  // const { logInDone } = useSelector((state) => state.user);
  // const router = useRouter();

  // if (!me) {
  //   router.push('/');
  // }

  return (
    <div>
      { me
        ? <PostForm />
        : <div style={{ width: '1000px', margin: '0 auto', fontSize: '16px', fontWeight: 500 }}>로그인 해주세요!!</div>}
      {/* { console.log(me) } */}
    </div>
  );
}

export default Post;
