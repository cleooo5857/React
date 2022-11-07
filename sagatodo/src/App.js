import { Provider } from 'react-redux';
import TodoPage from './pages/todo';
import createConfigure from './store';

function App() {

  console.log(process.env.NODE_ENV);
  // 개발환경에선 dvelopment 찍힐 것 
  console.log(process.env.REACT_APP_TOKEN);
  // 배포환경에선 = secret2 찍힐것 

  /**
   * 1. 개발환경인지 배포환경인지 알기 위해서
   *     (test API URL), (라이브러리 설정 개발자용 라이브러리) 
   
   * 2. 값을 숨기기 위해서, 외부에서 키 값을 공개하지 않기 위해서
          (API URL, 계정, 암호, key)
  */

  const store = createConfigure();
  return (
    <Provider store={store}>
      <TodoPage />
    </Provider>
  );
}
export default App;

/*
  결국 saga를 쓰는 이유 !
  동기적 흐름을 비동기적을로 하기 위해 
    ㄴ 어떤 함수나 이벤트를 실행시키면 reducer의 action에 전달이 되면서 saga에 있는
    로직도 실행이 됨 성공하면 성공한 로직을 reducer의 action에 전달
    
*/
