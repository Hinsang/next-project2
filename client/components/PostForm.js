import React, { useCallback, useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { ADD_POST_RESET, postRequestAction } from '../reducers/post';

const PostForm = () => {
  const addPostLoading = useSelector((state) => state.post.addPostLoading);
  const addPostDone = useSelector((state) => state.post.addPostDone);
  const mainPosts = useSelector((state) => state.post.mainPosts);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onChangeDescription = useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    dispatch(postRequestAction({ title, description }));
    console.log(title, description);
  }, [title, description]);

  useEffect(() => {
    if (addPostDone) {
      console.log(addPostDone);
      setTimeout(0);
      console.log(mainPosts);

      Router.push('/Board');
      dispatch({
        type: ADD_POST_RESET,
        // addPostDone 상태 리셋
      });
    }
  }, [addPostDone]);
  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <div style={{ margin: 20 }} />
      <Form onFinish={onSubmitForm} style={{ margin: 20 }}>
        <div>
          <label htmlFor="post-title">제목</label>
          <br />
          <Input name="post-title" style={{ width: '90%' }} value={title} onChange={onChangeTitle} required />
        </div>
        <div style={{ marginTop: 10 }}>
          <label htmlFor="post-description">내용</label>
          <br />
          <Input.TextArea name="post-description" style={{ width: '90%', height: 400 }} value={description} onChange={onChangeDescription} required />
        </div>
        <div>
          <Button style={{ marginTop: 15 }} htmlType="submit" loading={addPostLoading}>글쓰기</Button>
        </div>
      </Form>
    </div>
  );
};

export default PostForm;
