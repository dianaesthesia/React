const User = ({user}) => {
    const {id, name, username, email, address: {street}, phone} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>street: {street}</div>
            <div>phone: {phone}</div>
            <hr/>
        </div>
    );
};

export {User};