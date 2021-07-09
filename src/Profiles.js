import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
  const activeStyle = {
    // background: 'black',
    color: 'red',
  };

  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/bjk">
            김범진
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/chs">
            최한솔
          </NavLink>
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
