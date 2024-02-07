const RickAndMortyComponent = ({character}) => {
    const {id, name, status, species, gender, image} = character;
    return (
        <div>
            <p>id: {id},</p>
            <p>name: {name},</p>
            <p>status: {status},</p>
            <p>species: {species},</p>
            <p>gender: {gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export {RickAndMortyComponent};