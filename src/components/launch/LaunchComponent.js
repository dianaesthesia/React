const LaunchComponent = ({launch}) => {
    const {flight_number, mission_name, launch_year, links: {mission_patch_small}} = launch;

    return (
        <div>
            <p>Flight number: {flight_number}</p>
            <p>Mission name: {mission_name}</p>
            <p>Launch year: {launch_year}</p>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {LaunchComponent};