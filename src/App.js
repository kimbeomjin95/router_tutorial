import './App.css';
// Route 컴포넌트를 사용하면 어떤 규칙을 가진 경로에 어떤 컴포넌트를 보여줄 지 정의
import { Route, Link } from 'react-router-dom'; 
import Home from './Home';
import About from './About';

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
      </ul>
      <hr />
      <Route path="/" component={Home} exact /> 
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
