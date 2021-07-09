import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
  bjk: {
    name: '김범진',
    description: '리액트를 좋아하는 개발자',
  },
  chs: {
    name: '최한솔',
    description: '운동을 좋아하는 여자',
  },
};

// match: 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보(URL 파라미터)
const Profile = ({ match }) => {
  // console.log({ match });
  const { username } = match.params; // bjk, chs
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  const { name, description } = profile;
  return (
    <div>
      <h3>
        {username}({name})
      </h3>
      <p>{description}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(Profile);
