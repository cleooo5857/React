import { useState } from "react"
import { useUserListState } from "../context/state";
import Addform from "./addForm";
import AddList from "./addList";

function AddState() {

    const userList = useUserListState();

    return (
        <>
            {
                userList.length > 0 && userList.map((user) => (
                    <AddList key={user.id} user={user} />
                ))
            }
            <Addform lastId={userList.length > 0 && userList[userList.length - 1].id} />
        </>
    )
}
export default AddState