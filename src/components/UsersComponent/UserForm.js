import {useForm} from "react-hook-form";

import {userApiService} from "../../services/user.api.service";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit} = useForm();

    const createUser = (item) => {
        userApiService.create(item).then(({data}) => setUsers(prev => ([...prev, data])))
    };

    return (
        <form onSubmit={handleSubmit(createUser)}>
            <input type={'text'} placeholder={'name'} {...register('name')}/>
            <input type={'text'} placeholder={'username'} {...register('username')}/>
            <input type={'email'} placeholder={'email'} {...register('email')}/>
            <input type={'text'} placeholder={'street'} {...register('address.street')}/>
            <input type={'number'} placeholder={'phone'} {...register('phone')}/>
            <button>Create new user</button>
        </form>
    );
};

export {UserForm};