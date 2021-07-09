import qs from 'qs';

// location: http://localhost:3000/about?detail=true
const About = ({ location }) => {
  // search 값에서 특정 값(value)을 읽어 오기 위해서는 문자열을 객체 형태로 변환해주어야 함
  // location.search: ?detail=true
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략
  });
  const showDetail = query.detail === 'true';
  // 쿼리 문자열은 객체로 파싱하는 과정에서 결과값은 문자열이므로 숫자값을 받아올시 숫자로 변환(parseInt)이 필요함
  // console.log(parseInt(query.number) === 1 ? 'OK' : 'NO'); // OK
  // console.log(`search: ${location.search}`); // ?detail=true
  // console.log(`query: ${query.detail}`); // true

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
