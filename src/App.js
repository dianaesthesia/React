import './App.css';
import {rickandmorty} from './data/rickandmorty_array';
import {RickAndMortyComponent} from './components/rickandmorty/RickAndMortyComponent';


const App = () => {
    return (
        <div>
            {
                rickandmorty.map(character => (
                    <RickAndMortyComponent character={character} key={character.id}/>
                ))
            }
        </div>
    );
};

export {App};
