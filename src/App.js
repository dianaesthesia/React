import './App.css';
import {simpsons} from './data/simpsons_array';
import {SimpsonComponent} from './components/simpson/SimpsonComponent';


const App = () => {
    return (
        <div>
            {
                simpsons.map(simpson=> (
                    <SimpsonComponent item={simpson} key={simpson.id}/>
                ))
            }
        </div>
    );
};

export {App};
