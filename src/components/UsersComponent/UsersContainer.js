import {useEffect, useState} from "react";

import {userApiService} from "../../services/user.api.service";
import {UserForm} from "./UserForm";
import {Users} from "./Users";

const UsersContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userApiService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UsersContainer};