import React, {Component} from 'react';
import Pokemon from './Pokemon';
import axios from 'axios';
import PokemonList from './PokemonList';

class PokemonContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "Loading Pokemon..",
            inputValue: "",
            imgUrl : "",
            pokemonsHistory: []
        }

        this.handleClick = this.handleClick.bind(this);
    };
    
    componentDidMount() {
        // executes as soon as the component loads on the page - so all api calls go here, initial ones.
        // https://pokeapi.co/api/v2/pokemon/ditto/
        axios.get('https://pokeapi.co/api/v2/pokemon/ditto/').then((pokemon) => {            
            this.setState({
                name: pokemon.data.name
            });
        });
    };

    handleClick() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.inputValue}`).then((pokemon) => {
            this.state.pokemonsHistory.push(pokemon);            
            this.setState({
                name: pokemon.data.name,
                imgUrl: pokemon.data.sprites.front_default
            }); 
        });
    };

    handleChange(e) {
        
        this.setState({
            inputValue: e.target.value
        });
    };

    render() {
        return (
            <div>
                <h2>Pokemon Container</h2>

                <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Pokemon name or id"/>
                <button onClick={() => this.handleClick()}>Submit</button>

                <Pokemon
                    name={this.state.name}
                    imgUrl={this.state.imgUrl}
                />

                <PokemonList
                    pokemonsHistory={this.state.pokemonsHistory}
                />
            </div>
        )
    }
}

export default PokemonContainer;