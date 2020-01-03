import React, { useState, useEffect } from 'react'
import './style.scss'

import List from './components/List/index.jsx'
import Display from './components/Display/index.jsx'

function App() {
	const [pokemons, setPokemons] = useState([])
	const [selectedPokemons, setSelectedPokemons] = useState([])

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
		.then(res => res.json().then(data => {setPokemons(data.results )}))
	}, [])

	const selectPokemon = event => {
		const url = event.target.getAttribute('url')

		setSelectedPokemons(url)
	}

	return (
		<div className="app">
			<List pokemons={ pokemons } selectPokemon={ selectPokemon }></List>
			<Display pokemon={ selectedPokemons }></Display>
		</div>
	);
}

export default App;
