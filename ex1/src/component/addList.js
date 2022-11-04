import { useState } from 'react'
import { REMOVE_STATE, useUserListDisaptch, useUserListState, ADIT_TEXT } from "../context/state";


function AddList({user}) {
    
    const userList = useUserListState();
    const userListDispatch = useUserListDisaptch()
    

    const [edit, setEdit] = useState(false);
    const [nameText, setnameText] = useState('')

    
    const onRemoveUser = () => {

        userListDispatch({
            type: REMOVE_STATE,
            payload: {
                id: user.id
            }
        })
    }

    // textarea에 값 저장하기 
    const onChangeRename = (e) => {
        setnameText(e.target.value)
    }

    // span태그를 textarea로 바꿈
    const btnRename = () => {
        setEdit(true)
    }
    
    //수정하기
    const onEditList = () => {
        setEdit(false)
        // map으로 돌린 배열 id와 find함수로 돌린 userlist.id 조건이 맞는 값을저장
        userListDispatch({
            type: ADIT_TEXT,
            payload: {
                id:user.id,
                name:nameText
            }
        })
    } 

    return (
        <div> {user.id}. { edit ? <textarea value={nameText} onChange={onChangeRename}>{user.name}</textarea> : <span>{user.name}</span> }
            <button onClick={edit ?  onEditList : btnRename} > {edit ? "완료" :  "수정" } </button>
            <button onClick={onRemoveUser}>삭제</button>
        </div>
    )   
}

export default AddList;