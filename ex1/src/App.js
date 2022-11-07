import AddState from "./component/addState";
import UseReducer from "./component/useReducer";
import ContextProvider from "./context/state";

function App() {
  return (
    // 전달받음으로써 전역화를 시켜버림 ㄷㄷ
    /*
      ContextProvider export한것을 app.js 에 사용함으로써 전역화 시킨 정보들을 
      모든 컴포넌트들에서 사용 할 수 있다.
    */ 

    <ContextProvider>
      <AddState />
      {/* <UseReducer/> */}
    </ContextProvider>
  );
}
export default App;