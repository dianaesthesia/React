import './App.css';
import {simpsons} from './data/simpsons_array';
import {SimpsonComponent} from './components/simpson/SimpsonComponent';


const App = () => {
    return (
        <div>
            {
                simpsons.map((simpson, index) => (
                    <SimpsonComponent item={simpson} key={index}/>
                ))
            }
        </div>
    );
};

export {App};
