import { all, fork } from 'redux-saga/effects'
import todoSaga from './todo'

export default function* rootSaga() {
    // yield 뜻 기다려 ..!
    // 동기 함수를 비동기 처리하기위해 fork를 사용, fork(함수,이벤트....)를 여러개 실행시키기 위해
    yield all([fork(todoSaga)])
}