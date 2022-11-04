import { createContext, useContext, useReducer } from 'react';

const initialState = [
    {
        id: 1,
        name: "김성용"
    },
    {
        id: 2,
        name: "김사과"
    },
    {
        id: 3,
        name: "이멜론"
    }
]

// 저장공간을 만들어서 담아준다.
// createContext 내부에 공유하길 원하는 데이터의 초깃값을 넣어
const StateContext = createContext();
const DispatchContext = createContext();


/*
 원래라면 StateContext export해야하지만 그렇게되면 모든 컴포넌트들 import를 해야하므로
useContext(StateContext) export를 해준것이다.
 */ 
export const useUserListState = () => useContext(StateContext)
export const useUserListDisaptch = () => useContext(DispatchContext)




export const ADD_STATE = "ADD_STATE";
export const REMOVE_STATE = "REMOVE_STATE";
export const ADIT_TEXT = "ADIT_TEXT";


// state변경 시킬 
const UserListRducer = (state, action) => {
    switch (action.type) {
        case ADD_STATE:
            return [...state, { id: action.payload.id, name: action.payload.name }]
        case REMOVE_STATE:
            return state.filter((list) => list.id !== action.payload.id);
        case ADIT_TEXT:
                const newState = [...state]
                const newText = newState.find((userlist) => userlist.id === action.payload.id)
                newText.name = action.payload.name
                return state
                
        default:
            return;

    }
}

// app.js에 사용하기 위해 정확하게는 모든 컴포넌트들의 전역화 시킬 데이터를 써주기 위해 
const ContextProvider = ({ children }) => {


    const [state, dispatch] = useReducer(UserListRducer, initialState);
    
    /* 
        chilren = 현재 ContextProvider(함수)가 감싸주고 있는 하위 컴포넌트(요소,태그)
        ex)
        <ContextProvider>
            <div> <--- children 
        </ContextProvider>
    */

    return (
            //감싸고 있는 태그들의 역할은 chilren 한테 value ="전역인 무언가의 값" 상태를 전달해주기 위해
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}
export default ContextProvider

