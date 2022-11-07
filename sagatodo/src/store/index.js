import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';


import rootSaga from '../saga';
import rootReducer from '../reducer';

const logger = createLogger();
// 로거 생성
const sagaMiddleware = createSagaMiddleware();
// 사가 생성

const createConfigure = () => {
    // 상태를 저장하기 위해 
    const store = createStore(
        rootReducer,
        // 개발자용일떄 true
        process.env.NODE_ENV === "development"
            // 개발자용
            ? composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
            : applyMiddleware(sagaMiddleware)
    )

    sagaMiddleware.run(rootSaga);
    return store;
}
export default createConfigure;
