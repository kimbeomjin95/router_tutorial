import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/bjk">김범진</Link>
        </li>
        <li>
          <Link to="/profiles/chs">최한솔</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요.</div>} // render: 컴포넌트 자체를 전달하는 것이 아니라 JSX 사용 가능
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
