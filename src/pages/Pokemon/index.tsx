import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from  '../../utils/api';
import { Container, TypesWrapper, MovesWrapper } from './styles';
import typeColors from './config';

type PokemonInfo = {
  abilities: Object[],
  base_experience: number,
  forms: Object[],
  game_indices: Object[],
  height: number,
  held_items: Object[],
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: [{
    move: {
      name: string,
      url: string,
    },
    version_group_details: Object[],
  }],
  name: string,
  order: number,
  past_types: Object[],
  species: {
    name: string,
    url: string,
  },
  sprites: Object,
  stats: Object[],
  types: [{
    slot: number,
    type: {
      name: string,
      url: string,
    }
  }],
  weight: number,
}

export default function Pokemon () {
  const params = useParams();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();
  useEffect(() => {
    api.get(`pokemon/${params.pokemon}`).then(res => {
      setPokemonInfo(res.data);
    });
  }, [])

  return <Container>
    <a href="http://localhost:3000">&#8624;</a>
    <h1>{[pokemonInfo?.species.name.charAt(0).toUpperCase(), pokemonInfo?.species.name.slice(1)].join('')}</h1>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params.pokemon}.png`} alt="" />
    <TypesWrapper>
      {pokemonInfo?.types.map(element => {
        return <p key={element.type.url} style={{ backgroundColor: typeColors[Number(element.type.url.replace(/\D/g, "").substring(1)) - 1]}}>{[element.type.name.charAt(0).toUpperCase(), element.type.name.slice(1)].join('')}</p>
      })}
    </TypesWrapper>
    <MovesWrapper>
      {pokemonInfo?.moves.map(element => {
        return <p key={element.move.url}>{[element.move.name.charAt(0).toUpperCase(), element.move.name.replace('-', ' ').slice(1)].join('')}</p>
      })}
    </MovesWrapper>
  </Container>
}
