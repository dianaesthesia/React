const SimpsonComponent = ({item}) => {
    const {name, surname, age, info, photo} = item;
    return (
        <div>
            <p>name: {name},</p>
            <p>surname: {surname},</p>
            <p>age: {age},</p>
            <p>info: {info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
};

export {SimpsonComponent};