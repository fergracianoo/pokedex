import { useEffect } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import api from  '../../utils/api';
import { Container } from './styles';

export default function Home () {
  useEffect(() => {
    api.get('pokemon/?limit=10').then((res) => {
      console.log(res.data);
    });
  }, []);

  return <Container>
    <PokemonCard />
  </Container>;
}