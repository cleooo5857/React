/* 
state => 업데이트 할 상태 전달 받을 것
action => 어떤 이벤트를 일으킬건지 이벤트의 이름을 전달 받을 것
*/


export const NumberReducer = function reducer(state, action) {

    console.log(state)
    switch (action.tpye) {
        case "INCREMENT":
            return state  + action.count;
        case "DCREMENT":
            return state  - action.count;
        default:
            return state; 
    }
}