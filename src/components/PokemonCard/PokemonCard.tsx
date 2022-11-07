import { Container } from './styles';
import EnergyImg from '../../assets/energy.png'

type PokemonCardProps = {
  name: string,
  id: number,
}

export default function PokemonCard (props: PokemonCardProps) {
  const { name, id } = props;
  return <Container href={`http://localhost:3000/pokemon/${id}`}>
    <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name.charAt(0).toUpperCase() + name.slice(1)} />
    <div className="description">
    <p><img src={EnergyImg} alt="Imagem de energia" />Tackle</p>
    <p>40</p>
    </div>
  </Container>;
};