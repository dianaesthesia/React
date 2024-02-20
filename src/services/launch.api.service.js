import {axiosInstance} from "./axiosInstance";
import {launches} from "../constants/urls";

const getAllLaunches = () => {
    return axiosInstance.get(launches);
}

export {getAllLaunches};