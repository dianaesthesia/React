import {useForm} from "react-hook-form";

import {userApiService} from "../../services/user.api.service";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit} = useForm();
    const createUser = (item) => {
        userApiService.create(item).then(({data}) => setUsers(prev => [...prev, data]));
    }
    return (
        <form onSubmit={handleSubmit(createUser)}>
            <input type={'text'} placeholder={'name'} {...register('name')}/>
            <button>Create new user</button>
        </form>
    );
};

export {UserForm};