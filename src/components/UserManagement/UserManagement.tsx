import {ToastContainer} from "react-toastify";
import UserForm from "./UserForm/UserForm.tsx";
import type {UserMutation} from "../../types";
import {useState} from "react";
import Users from "./Users/Users.tsx";

const UserManagement = () => {
    const [users, setUsers] = useState<UserMutation[] | []>([])

    const addUser = (user: UserMutation) => {
        setUsers(prevState => [...prevState, user])
    }

    return (
        <>
            <ToastContainer/>
            <main className="container-lg">
                <div className="row mt-5">
                    <div className="col-4"><UserForm addUser={addUser}/></div>
                    <div className="col-4"><Users users={users}/></div>
                </div>
            </main>
        </>
    )
}

export default UserManagement