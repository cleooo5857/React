import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TODO_REQUEST } from '../../reducer/todo';
import Todo from './Todo/Todo';

function TodoPage() {
    const { todos } = useSelector((state) => state.todo)
    const dispatch = useDispatch();


    const [todo, setTodo] = useState('');
    const onChangeTodoInput = (e) => {
        setTodo(e.target.value)
    }

    const onAddTodoList = () => {
        console.log(todos.length);
        let lastId;
        if (todos.length > 0) {
            lastId = todos[0].id
        } else {
            lastId = 0;
        }

        dispatch({
            type: ADD_TODO_REQUEST,
            // ADD_TODO_REQUEST(LOADING)
            payload: {
                id: lastId + 1,
                todo
            }
        })
    }


    /* 

    arr = [
        {
            id: 1,
            todo: "리엑트 공부하기"
        },
        {
            id: 2,
            todo: "리엑트 또 공부하기"
        }
    ]

    for(let i=0; i<arr.length i++){
        console.log(arr[i])
        //1,2
    }
    
    */

    return (
        <div>
            {todos.map((todo) => {
                return <Todo todo={todo} />
            })}
            {/**
             * <Todo todo={첫번쨰 todo}/>
             * <Todo todo={두번쨰 todo}/>
             */}
            <input value={todo} onChange={onChangeTodoInput} />
            <button onClick={onAddTodoList}>추가</button>
        </div>
    )
}
export default TodoPage;