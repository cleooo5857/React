import { useReducer } from "react"
import { NumberReducer } from "../reducer/number"

function UseRducer () {

    // 전역화 시킨 함수를 받아 기본값은 0 number에 
    const [number, dispatch] = useReducer(NumberReducer, 0);

/* 
    const [state명, dispatch명] = useReducer(사용 할 reducer명, state의 기본 값)

    * dispatch (이벤트리스너, 비둘기)
    component - reducer 연결해주고 값을 전달하는 매게채
*/


    const onIncreament = () => {
/* 
        disptach ( action 객체 )
*/
        dispatch({
            type: "INCREMENT",
            count: 2
            
        })
    }

    const onDecrement = () => {

        dispatch({
            type: "DCREMENT",
            count: 2
        })
    }

    return (

            <div>
                <button onClick={onIncreament}>+</button>
                    {number}
                <button onClick={onDecrement}>-</button>
            </div>
    )
}
export default UseRducer