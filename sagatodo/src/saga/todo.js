import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import { ADD_TODO, ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SCUCESS, REMOVE_TODO_REQUEST, REMOVE_TODO_SCUCESS ,REMOVE_TODO_FAILURE ,EDIT_TODO } from "../reducer/todo";


// AddList 비동기 추가 함수 
function* addTodo(action) {
    /* try {
        ... 에러가 날 수도 있는 문장 (예외가 생길 수 있는 문장)
        .. 성공 하면 실행할 문장
    } catch (err) {
        err ... 실패한 내용 
        ... 실패할 때 실행할 문장
    }
    */

    try {
        yield delay(1000); //백엔드는 비동기이기 때문에 시간이 소요, 시간 딜레이를 구현
        /* 성공했으면*/
        yield put({
            type: ADD_TODO_SCUCESS,  //ADD_TODO_SUCCESS
            payload: action.payload
            // 왔던 action 값을 그대로 전달, 원래라면 백엔드에게 받은 데이터 전달
        })

    } catch (err) {
        yield put({
            type: ADD_TODO_FAILURE, //ADD_TODO_FAILURE
            payload: {
                err: err.response.data
            }
        });
        throw new Error(err);
    }
}

/*
이벤트 발생 시 type(준비상태) 확인 -> 데이터 받아오면 
*/

function* removeTodo(action) {

    try {
        yield delay(1000); 
        yield put({
            type: REMOVE_TODO_SCUCESS,  
            payload: action.payload
        })

    } catch (err) {
        yield put({
            type: REMOVE_TODO_FAILURE, 
            payload: {
                err: err.response.data
            }
        });
        throw new Error(err);
    }
}


/* 
    dispatch(pending, loading) -> 백엔드 통신 -> 성공/실패 
    --> dispatch (success/fullfield, failure/rejcet)
    * 요청, 실패, 성공 *
*/


/* 
이벤트 리스너 
reducer에 action이 전달되면
해당 action_type을 캐치
*/
function* watchAddTodo() {
    // reducer가 받으면 saga도 받아서 실행해준다.
    yield takeLatest(ADD_TODO_REQUEST, addTodo)
    //ADD_TODO_LOADING
}

// function* watchRemoveTodo() {
//     yield takeLatest(REMOVE_TODO, removeTodo)
// }

function* watchRemoveTodo() {
    yield takeLatest(REMOVE_TODO_REQUEST, removeTodo)
}

export default function* todoSaga() {
    yield all([fork(watchAddTodo), fork(watchRemoveTodo)])
}