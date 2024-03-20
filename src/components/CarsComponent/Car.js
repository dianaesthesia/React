import {carApiService} from "../../services/car.api.service";

const Car = ({car, setCarForUpdate, setTrigger}) => {
    const {id, brand, price, year} = car;

    const deleteCar = async () => {
        await carApiService.deleteById(id);
        setTrigger(prev => !prev);
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </div>
    );
};

export {Car};