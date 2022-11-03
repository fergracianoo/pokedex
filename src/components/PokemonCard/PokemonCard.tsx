import { Container } from './styles';
import EnergyImg from '../../assets/energy.png'

export default function PokemonCard () {
  return <Container href='https://www.google.com'>
    <p>Bulbasaur</p>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="pokemon" />
    <div className="description">
    <p><img src={EnergyImg} alt="Imagem de energia" />Tackle</p>
    <p>40</p>
    </div>
  </Container>;
};