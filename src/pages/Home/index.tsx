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

  function addNewPokemon () {
    const offset = pokemonList.length / 10;
    console.log(offset);
    api.get(`pokemon/?limit=10&offset=${offset}0`).then((res) => {
      console.log(res.data);
      // console.log(pokemonList);
      // const newPokemon = [...pokemonList];
      // newPokemon.push(...res.data.results);
      // console.log(newPokemon);
      console.log([...pokemonList, ...res.data.results]);
      setPokemonList([...pokemonList, ...res.data.results]);
    });
  }

  useEffect(() => {
    console.log('useEffect');
    addNewPokemon();
  }, []);

  return <Container>
    <h1>Graciano<strong>Dex</strong></h1>
    <div>
    {pokemonList.map((pokemon) => {
        const id = pokemon.url.replace(/\D/g, "").substring(1);
        console.log(id);
        return <PokemonCard name={pokemon.name} id={+id} key={pokemon.url} />
    })}
    <LoadMore onClick={() => addNewPokemon()}><p>Carregar mais...</p></LoadMore>
    </div>
  </Container>;
}