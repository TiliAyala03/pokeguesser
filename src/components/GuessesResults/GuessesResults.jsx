import { useState, useEffect, useMemo, use } from 'react'
import './GuessesResults.css'

export default function GuessesResults({ rightPokemonResults })
{

    const restoredAttempts = [];

    for (let i = 1; i <= 7; i++) {

        const guess = localStorage.getItem("guess" + i);

        if (guess !== "null" && guess !== null) {
            restoredAttempts.push(guess);
        }

    }

    const numberOfAttempts = restoredAttempts.length;

    return(

        <div className='MAINGUESSESRESULTS'>

        <img className='POKEMONGUESS' 
             src={numberOfAttempts >= 1 ? `${import.meta.env.BASE_URL}pokemon_icons_pixel/${restoredAttempts[0]}.png` : `${import.meta.env.BASE_URL}pokemon_icons/none.png`}/>
        <img className='POKEMONGUESS' 
             src={numberOfAttempts >= 2 ? `${import.meta.env.BASE_URL}pokemon_icons_pixel/${restoredAttempts[1]}.png` : `${import.meta.env.BASE_URL}pokemon_icons/none.png`}/>
        <img className='POKEMONGUESS' 
             src={numberOfAttempts >= 3 ? `${import.meta.env.BASE_URL}pokemon_icons_pixel/${restoredAttempts[2]}.png` : `${import.meta.env.BASE_URL}pokemon_icons/none.png`}/>
        <img className='POKEMONGUESS' 
             src={numberOfAttempts >= 4 ? `${import.meta.env.BASE_URL}pokemon_icons_pixel/${restoredAttempts[3]}.png` : `${import.meta.env.BASE_URL}pokemon_icons/none.png`}/>
        <img className='POKEMONGUESS' 
             src={numberOfAttempts >= 5 ? `${import.meta.env.BASE_URL}pokemon_icons_pixel/${restoredAttempts[4]}.png` : `${import.meta.env.BASE_URL}pokemon_icons/none.png`}/>
        <img className='POKEMONGUESS' 
             src={numberOfAttempts >= 6 ? `${import.meta.env.BASE_URL}pokemon_icons_pixel/${restoredAttempts[5]}.png` : `${import.meta.env.BASE_URL}pokemon_icons/none.png`}/>
        <img className='POKEMONGUESS' 
             src={numberOfAttempts >= 7 ? `${import.meta.env.BASE_URL}pokemon_icons_pixel/${restoredAttempts[6]}.png` : `${import.meta.env.BASE_URL}pokemon_icons/none.png`}/>
        
        <div className='SEPARATOR'></div>

        <img className='POKEMONGUESS' 
             src={(numberOfAttempts == 7 && restoredAttempts[6] != rightPokemonResults) ? `${import.meta.env.BASE_URL}pokemon_icons/lost.png` : `${import.meta.env.BASE_URL}pokemon_icons/won.png`}/>

        </div>

    )

}