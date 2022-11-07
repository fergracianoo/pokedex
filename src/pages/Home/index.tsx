import { FC, useCallback, useEffect, useState } from 'react';

import PokemonCard from '../../components/PokemonCard/PokemonCard';
import api from  '../../utils/api';

import { BsPlusLg } from 'react-icons/bs';
import { Container, LoadMore } from './styles';

interface Pokemon {
  name: string,
  url: string,
}

const Home: FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const addNewPokemon = useCallback(() => {
    const offset = pokemonList.length / 10;
    api.get(`pokemon/?limit=10&offset=${offset}0`).then((res) => {
      setPokemonList([...pokemonList, ...res.data.results]);
    });
  },[pokemonList])

  useEffect(() => {
    addNewPokemon()
  },[])

  return (
    <Container>
      <h1>
        Graciano<strong>Dex</strong>
      </h1>
      <div>
        {pokemonList.map((pokemon) => {
          const id = pokemon.url.replace(/\D/g, "").substring(1);

          return (
            <PokemonCard name={pokemon.name} id={+id} key={pokemon.url} />
          ) 
        })}
        <LoadMore onClick={addNewPokemon}>
          <BsPlusLg size={30} />
        </LoadMore>
      </div>
    </Container>
  ) 
};

export default Home;
