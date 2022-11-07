export const capitalize = (text: string) => {
  return [text.charAt(0).toUpperCase(), text.slice(1)].join('')
}

export const pokemonSprint = (sprint: string | number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${sprint}.png`
}