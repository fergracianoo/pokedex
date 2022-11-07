import { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import api from  '../../utils/api';
import { Container, LoadMore } from './styles';

type Pokemon = {
  name: string,
  url: string,
}

export default function Home () {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const addNewPokemon = () => {
    const offset = pokemonList.length / 10;
    api.get(`pokemon/?limit=10&offset=${offset}0`).then((res) => {
      setPokemonList([...pokemonList, ...res.data.results]);
    });
  }

  useEffect(() => {
    addNewPokemon();
  }, []);

  return <Container>
    <h1>Graciano<strong>Dex</strong></h1>
    <div>
    {pokemonList.map((pokemon) => {
        const id = pokemon.url.replace(/\D/g, "").substring(1);
        return <PokemonCard name={pokemon.name} id={+id} key={pokemon.url} />
    })}
    <LoadMore onClick={addNewPokemon}><p>+</p></LoadMore>
    </div>
  </Container>;
}