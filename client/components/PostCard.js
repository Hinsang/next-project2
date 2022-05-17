import React from 'react';
import { Button, Card } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
// import PostImages from './PostImages';

const PostCard = ({ post }) =>
  // const { me } = useSelector((state) => state.user);
  // const id = me && me.id;
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <div>
      <Card
        // cover={post.Images[0] && <PostImages images={post.Images} />}
        action={<HeartOutlined key="heart" />}
      >
        <Button.Group>
          {/* {id && post.id === id ? (
            <>
              <Button>수정</Button>
              <Button type="danger">삭제</Button>
            </>
          ) : <div />} */}
        </Button.Group>
        <Card.Meta
          title={post.id}
          description={post.description}
        />
      </Card>
    </div>
  );
PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    // Images: PropTypes.arrayOf(PropTypes.object),
    description: PropTypes.string,
    createdAt: PropTypes.string,
    // 객체들의 배열
  }).isRequired,
  // object보다 shape는 더 자세하게 속성을 정의할 수 있다.
};

export default PostCard;
