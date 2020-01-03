import React, { useEffect, useState } from 'react'
import logo from './logo.png'

import './style.scss'

function Display(props) {
	const [pokemon, setPokemon] = useState({})
	const [lastPokemon, setLastPokemon] = useState(props.pokemon)

	useEffect(() => {
		if (props.pokemon !== lastPokemon) {
			fetchPokemon()
		}

		setLastPokemon(props.pokemon)
	})

	function fetchPokemon() {
		fetch(props.pokemon)
		.then(res => res.json().then(data => {
		setPokemon(data)}))
	}

	return (
		<div className="display">
			<img src={logo} alt="" className="logo"/>
			<h2 className="display__name">
				{ pokemon.name && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }
			</h2>

			{pokemon.sprites ? <img src={pokemon.sprites['back_default']} className="display__image" /> : <span className="display__default">?</span>}
		</div>
	)
}

export default Display