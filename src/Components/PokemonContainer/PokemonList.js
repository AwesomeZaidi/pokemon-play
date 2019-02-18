import React, {Component} from 'react';

class PokemonList extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <h3>PokemonListHistory!</h3>
                {this.props.pokemonsHistory.map((pokemon) => (
                    <div> <p>{pokemon.data.name} </p> <img src={pokemon.data.sprites.front_default} alt="fe"/> </div>
                ))}
                {/* <section>   
                   {this.props.pokemomnHistory.map((pokemon) => {
                   })}
                </section> */}
            </div>
        )
    }
}

export default PokemonList;