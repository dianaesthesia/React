import {Car} from "./Car";

const Cars = ({cars, setCarForUpdate}) => {

    return (
        <div>
            {
                cars.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate}/>)
            }
        </div>
    );
};

export {Cars};