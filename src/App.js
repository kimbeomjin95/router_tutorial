import './App.css';
// Route 컴포넌트를 사용하면 어떤 규칙을 가진 경로에 어떤 컴포넌트를 보여줄 지 정의
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

function App() {
  return (
    // <Route path="주소규칙" component={보여줄 컴포넌트} />
    // exact: /(루트) 경로가 동일하므로 이를 방지하기 위한 설정
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/bjk">김범진 프로필</Link>
        </li>
        <li>
          <Link to="/profile/chs">최한솔 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      {/* path props를 배열로 설정해 주면 여러 경로에서 같은 컴포넌트로 설정 */}
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
}

export default App;
