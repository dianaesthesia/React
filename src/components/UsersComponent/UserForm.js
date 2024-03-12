import {useForm} from "react-hook-form";

import {userApiService} from "../../services/user.api.service";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset} = useForm();

    const createUser = (item) => {
        userApiService.create(item).then(({data}) => setUsers(prev => ([...prev, data])))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(createUser)}>
            <input type={'text'} placeholder={'name'} {...register('name')}/>
            <input type={'text'} placeholder={'username'} {...register('username')}/>
            <input type={'email'} placeholder={'email'} {...register('email')}/>
            <input type={'text'} placeholder={'street'} {...register('address.street')}/>
            <input type={'number'} placeholder={'phone'} {...register('phone', {valueAsNumber: true})}/>
            <button>Create new user</button>
        </form>
    );
};

export {UserForm};