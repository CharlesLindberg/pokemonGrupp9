const PokedexData = [
  {
    name: "bulbasaur",
    height: 7,
    weight: 69,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    height: 6,
    weight: 85,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "pikachu",
    height: 4,
    weight: 60,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mewtwo",
    height: 20,
    weight: 1220,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
  },
  {
    name: "magikarp",
    height: 9,
    weight: 100,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
  },
  {
    name: "jigglypuff",
    height: 5,
    weight: 55,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  },
  {
    name: "squirtle",
    height: 5,
    weight: 90,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "jolteon",
    height: 8,
    weight: 245,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
  },
  {
    name: "electabuzz",
    height: 11,
    weight: 300,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
  },
  {
    name: "moltres",
    height: 20,
    weight: 600,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
  },
  {
    name: "growlithe",
    height: 7,
    weight: 190,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
  },
  {
    name: "oddish",
    height: 5,
    weight: 54,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
  },
  {
    name: "rattata",
    height: 3,
    weight: 35,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
  },
  {
    name: "hypno",
    height: 16,
    weight: 756,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
  },
];
// Funktion för att skapa HTML för en Pokémon
function createPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("card");

  const nameElement = document.createElement("h2");
  nameElement.textContent = pokemon.name;

  const typeElement = document.createElement("p");
  typeElement.textContent = `Type: ${pokemon.type}`;

  const imageElement = document.createElement("img");
  imageElement.src = pokemon.url;
  imageElement.alt = pokemon.name;

  card.appendChild(nameElement);
  card.appendChild(typeElement);
  card.appendChild(imageElement);

  return card;
}

// Hämta Pokémon-lista elementet från DOM
const pokemonListElement = document.getElementById("container");

// Skapa och visa varje Pokémon på sidan
PokedexData.forEach((pokemon) => {
  const pokemonCard = createPokemonCard(pokemon);
  pokemonListElement.appendChild(pokemonCard);
});
