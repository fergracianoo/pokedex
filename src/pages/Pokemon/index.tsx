import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from  '../../utils/api';

import { typeColors, PokemonInfo } from './config';
import { capitalize, pokemonSprint } from "../../utils/format";

import { MdKeyboardReturn } from 'react-icons/md';
import { Container, TypesWrapper, MovesWrapper } from './styles';

const Pokemon:FC = () => {
  const params = useParams();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();

  useEffect(() => {
    api.get(`pokemon/${params.pokemon}`).then(res => {
      setPokemonInfo(res.data);
    });
  }, [])

  if (!pokemonInfo || !params) {
    return <div />
  }

  return (
    <Container>
      <Link to="/">
        <MdKeyboardReturn size={30} />
      </Link>
      <h1>
        {capitalize(pokemonInfo?.species.name)}
      </h1>
      <img src={pokemonSprint(params.pokemon || "")} alt="pokemon sprint" />
      <TypesWrapper>
        {pokemonInfo?.types.map(element => {
          return (
            <p 
              key={element.type.url} 
              style={{ backgroundColor: typeColors[element.type.name] }}
            >
              {capitalize(element.type.name)}
            </p>
          ) 
        })}
      </TypesWrapper>
      <MovesWrapper>
        {pokemonInfo?.moves.map(element => {
          return (
            <p key={element.move.url}>
              {capitalize(element.move.name)}
            </p>
          ) 
        })}
      </MovesWrapper>
    </Container>
  ) 
};

export default Pokemon;
