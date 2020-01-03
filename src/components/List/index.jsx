import React from 'react';

import './style.scss'

function List(props) {
	const { pokemons, selectPokemon } = props
	return (
		<div className="list">
			{
				pokemons.map(pokemon => {
					return (
						<li
							className="list__item"
							onClick={ selectPokemon }
							url={ pokemon.url }
							key={ pokemon.url }
						>
							{ pokemon.name  && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }
						</li>
					)
				})
			}
		</div>
	)
}

export default List