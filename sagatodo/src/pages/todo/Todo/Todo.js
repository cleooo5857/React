import { useState } from 'react';
import { EDIT_TODO, REMOVE_TODO_REQUEST } from "../../../reducer/todo";
import { useDispatch } from 'react-redux';

function Todo({ todo }) {

    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false);

    const [text, setText] = useState(todo.todo);
    const onChangeText = (e) => {
        setText(e.target.value)
    }

    const onDeleteTodoList = () => {
        dispatch({
            type: REMOVE_TODO_REQUEST,
            payload: {
                id: todo.id
            }
        })
    }

    const onClickEditBtn = () => {
        setEdit(true);
    }

    const onEditTodo = () => {
        dispatch({
            type: EDIT_TODO,
            payload: {
                id: todo.id,
                todo: text,
            }
        })
        setEdit(false);
    }

    return (
        <div key={todo.id}>
            {edit ? <textarea value={text} onChange={onChangeText}></textarea> : todo.todo}
            <button onClick={onDeleteTodoList}>삭제</button>
            {/* onClick={() => onDeleteTodoList(todo.id)} */}
            <button onClick={edit ? onEditTodo : onClickEditBtn}>
                {edit ? "완료" : "수정"}
            </button>
        </div>
    )
}
export default Todo;