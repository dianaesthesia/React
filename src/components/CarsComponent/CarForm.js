import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {carApiService} from "../../services/car.api.service";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {register, handleSubmit, reset, formState: {isValid, errors}, setValue} = useForm({
        mode: 'all'
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate]);

    const save = async (item) => {
        await carApiService.create(item);
        setTrigger(prev => !prev)
        reset()
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"text"} placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,
                    message: 'min 1 max 20 characters'
                },
                required: true
            })}/>
            <input type={"text"} placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                required: true,
                min: {value: 0, message: 'min 0'},
                max: {value: 1_000_000, message: 'max 1 000 000'}
            })}/>
            <input type={"text"} placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                required: true,
                min: {value: 1990, message: 'min 1990'},
                max: {value: new Date().getFullYear(), message: 'max current year'}
            })}/>
            <button disabled={!isValid}>Save</button>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </form>
    );
};

export {CarForm};