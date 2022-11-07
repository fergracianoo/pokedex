import { FC } from 'react';

import EnergyImg from '../../assets/energy.png'

import { Container } from './styles';
import { capitalize, pokemonSprint } from '../../utils/format';

type PokemonCardProps = {
  name: string,
  id: number,
}

const PokemonCard:FC<PokemonCardProps> = ({ name, id }) => (
  <Container to={`/pokemon/${id}`}>
    <p>{capitalize(name)}</p>
    <img 
      src={pokemonSprint(id)} 
      alt={capitalize(name)} 
    />
    <div className="description">
      <p>
        <img src={EnergyImg} alt="Imagem de energia" />Tackle
      </p>
      <p>40</p>
    </div>
  </Container>
)

export default PokemonCard;