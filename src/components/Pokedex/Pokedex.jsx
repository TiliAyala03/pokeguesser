import { useState, useEffect } from 'react'
import './Pokedex.css'

import undiscoveredPokemon from '/res/unknown.png'

export default function Pokedex()
{

    const [pokemonNames, setPokemonNames] = useState([]);
    const [pokedex, setPokedex] = useState([]);

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        async function loadPokemon()
        {
            if(localStorage.getItem("pokedex") == null)
            {
                localStorage.setItem(
                    "pokedex",
                    JSON.stringify(["aipom"])
                );
            }

            const response = await fetch(`${import.meta.env.BASE_URL}order.json`);
            const data = await response.json();

            const names = data.map(item => item[1]);

            setPokemonNames(names);

            const remembered =
                new Set(
                    JSON.parse(localStorage.getItem("pokedex")) || []
                );

            setPokedex(
                names.map(pokemon =>
                    remembered.has(pokemon)
                        ? pokemon
                        : "blank"
                )
            );

            setProgress((remembered.size/1025)*100);

        }

        loadPokemon();

    }, []);

    return(

        <div className='POKEDEX'>

            <h1>P O K É D E X</h1>

            <p>This is your personal Pokédex! To fill it up, you have to keep guessing Pokémon in the Daily Mode!</p>
            <p>Every right guess will automatically be added to your Pokédex, so you can keep track of which Pokémon you have guessed and which ones are yet to discover. If you play consistently, you might one day complete your Pokédex and unlock a secret. Keep it up!</p>

            <div className='OUTERPROGRESSBAR'>

                <div className='INNERPROGRESSBAR' style={{ width: `${progress}%` }}>
                </div>

            </div>

            <h4>{progress.toFixed(2)}%</h4>

            {pokedex.map((pokemon, index) => (

                <img
                    key={index}
                    src={
                        pokemon === "blank"
                            ? undiscoveredPokemon
                            : `${import.meta.env.BASE_URL}home_sprites/${index + 1}_${pokemon}.png`
                    }
                    className={
                        pokemon === "blank"
                            ? "BLANK"
                            : "NONBLANK"
                    }
                />

            ))}

        </div>

    )

}