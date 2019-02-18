import React, {Component} from 'react';

class Pokemon extends Component {

    render() {
        return (
            <div>
                <h3>Pokemon</h3>

                <section>
                    <p>{this.props.name}</p>
                    <img src={this.props.imgUrl} alt="Pokemon Img" />
                </section>
            </div>
        )
    }
}

export default Pokemon;