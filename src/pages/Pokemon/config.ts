export interface PokemonInfo {
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
      name: "bug" | "dark" | "dragon" | "electric" | "fairy" | "fighting" | "fire" | "flying" | "ghost" | "grass" | "ground" | "ice"| "normal" | "poison" | "psychic" | "rock" | "steel" | "water",
      url: string,
    }
  }],
  weight: number,
}

export const typeColors = {
  bug: '#A8B81F',
  dark: '#3E2D24',
  dragon: '#9080E1',
  electric: '#F7C33B',
  fairy: '#E99EE9',
  fighting: '#7F311B',
  fire: '#C62201',
  flying: '#5D74D5',
  ghost: '#504F9D',
  grass: '#73C238',
  ground: '#D1B056',
  ice: '#6BD3F3',
  normal: '#ACA594',
  poison: '#8F4492',
  psychic: '#DB2F61',
  rock: '#9D873B',
  steel: '#9797A7',
  water: '#3290EE',
}
