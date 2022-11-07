import produce from "immer";

const initialState = {
    todos: [
        {
            id: 2,
            todo: "리엑트 공부하기"
        },
        {
            id: 1,
            todo: "리엑트 또 공부하기"
        }
    ],
    addtodo: {
        loading: false,
        done: false,
        error: null
    }
}


export const ADD_TODO_REQUEST = "todo/ADD_TODO_REQUEST"
export const ADD_TODO_SCUCESS = "todo/ADD_TODO_SCUCESS"
export const ADD_TODO_FAILURE = "todo/ADD_TODO_FAILURE"

export const REMOVE_TODO_REQUEST = "todo/REMOVE_TODO_REQUEST"
export const REMOVE_TODO_SCUCESS = "todo/REMOVE_TODO_SCUCESS"
export const REMOVE_TODO_FAILURE = "todo/REMOVE_TODO_FAILURE"


export const EDIT_TODO = "todo/EDIT_TODO"

const todo = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {

            // 로딩
            case ADD_TODO_REQUEST:
                /**
                 * loading : true
                 * done : false 
                 * err : null
                 */
                draft.addtodo.loading = true;
                draft.addtodo.done = false;
                draft.addtodo.err = null;
                break;
            // 추가 버튼 클릭 시 성공했을때
            case ADD_TODO_SCUCESS:
                /**
                 * loading : false
                 * done : true
                 * err : null
                 */
                draft.addtodo.loading = false;
                draft.addtodo.done = true;
                draft.addtodo.err = null;
                draft.todos.unshift(action.payload);
                break;
            
            // 실패했을때
            case ADD_TODO_FAILURE:
                /**
                 * loading : false
                 * done(실행이 끝났냐) : true
                 * err : action.payload.err
                 */
                draft.addtodo.loading = false;
                draft.addtodo.done = true;
                draft.addtodo.err = action.payload.err;
                break;
                
//--------------------------------------------------------

            // 요청
            case REMOVE_TODO_REQUEST:
                draft.addtodo.loading = true;
                draft.addtodo.done = false;
                draft.addtodo.err = null;
                break;
            // 성공
            case REMOVE_TODO_SCUCESS:
                draft.addtodo.loading = false;
                draft.addtodo.done = true;
                draft.addtodo.err = null;
                draft.todos = draft.todos.filter((item) => item.id !== action.payload.id);
                break;
            
            // 실패했을때
            case REMOVE_TODO_FAILURE:
                draft.addtodo.loading = false;
                draft.addtodo.done = true;
                draft.addtodo.err = action.payload.err;
                break;

            case EDIT_TODO:
                const todo = draft.todos.find((item) => item.id === action.payload.id);
                todo.todo = action.payload.todo;
                break;
            default:
                return state;
        }
    })
}
export default todo;
