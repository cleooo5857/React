import { useState } from 'react';
import { ADD_STATE, useUserListDisaptch, useUserListState } from '../context/state';

function AddForm({ lastId }) {
    const userList = useUserListState();
    const userListDispatch = useUserListDisaptch();

    /* 깊이가 깊지 않기 때문에 lastId를 props로 받는게 효율적이나
        깊다는 가정 하에 전역으로 불러와서 사용
    */

    const [name, setName] = useState('');
    const onChageNameInput = (e) => {
        setName(e.target.value)
    }

    const onAddUserList = () => {
        const id = userList[userList.length - 1].id + 1
        userListDispatch({
            type: ADD_STATE,
            payload: {
                id, name
            }
        })
    }

    return (
        <>
            <input value={name} onChange={onChageNameInput} />
            <button onClick={onAddUserList}>추가</button>
        </>
    )
}
export default AddForm;