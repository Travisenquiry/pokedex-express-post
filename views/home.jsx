var React = require('react');
class Home extends React.Component {
  render() {
    let allPokemonList = this.props.pokemon.map((pokemon) => {
        return <li><a href={"/pokemon/" + pokemon.id}>{pokemon.name}</a></li>
    });
    return (
      <html>
        <body>
          <div>
            <h1>Welcome to pokedex!</h1>
            <ul>
                {allPokemonList}
            </ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;