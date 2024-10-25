const pokemonContainer = document.getElementById('pokemon-container');
const searchBar = document.getElementById('search-bar');

const typeColors = {
  fire: 'type-fire',
  water: 'type-water',
  grass: 'type-grass',
  electric: 'type-electric',
  psychic: 'type-psychic',
  ice: 'type-ice',
  dragon: 'type-dragon',
  fairy: 'type-fairy',
  dark: 'type-dark',
};

const fetchAllPokemon = async () => {
  for (let i = 1; i <= 151; i++) { 
    await fetchPokemon(i);
  }
};

const fetchPokemon = async (pokemon) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    displayPokemon(data);
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
};

const displayPokemon = (pokemon) => {
  const type = pokemon.types[0].type.name;
  const cardColorClass = typeColors[type] || 'default';

  const pokemonCard = `
    <div class="pokemon-card ${cardColorClass}">
      <h3>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <p>ID: ${pokemon.id}</p>
      <p>Type: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
    </div>
  `;
  pokemonContainer.innerHTML += pokemonCard;
};

searchBar.addEventListener('input', (e) => {
  const searchValue = searchBar.value.toLowerCase();
  const pokemonCards = document.querySelectorAll('.pokemon-card');
  pokemonCards.forEach(card => {
    if (card.innerHTML.toLowerCase().includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

fetchAllPokemon();