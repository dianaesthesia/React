import {useEffect, useState} from "react";
import {getAllLaunches} from "../../services/launch.api.service";
import {LaunchComponent} from "../launch/LaunchComponent";

const LaunchesComponent = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        getAllLaunches().then(({data}) => {
            const filteredLaunches = data.filter(item => item.launch_year !== '2020');
            setLaunches(filteredLaunches);
        });
    }, []);

    return (
        <div>
            {
                launches.map(launch => (
                    <LaunchComponent launch={launch} key={launch.flight_number}/>
                ))
            }
        </div>
    );
};

export {LaunchesComponent};