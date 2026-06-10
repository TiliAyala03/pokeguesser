import { useState, useEffect } from 'react'
import './MicroGuesses.css'

//Resources
import blankGuess from '/res/pokeball2.png'

export default function MicroGuesses({ attempts })
{

    return(

        <div className='MICROGUESSESCONTAINER'>

            {attempts.length < 1 
                ? (<img className='BLANKGUESS' src={blankGuess} />) 
                : (<img className='NONBLANKGUESS' src={`${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[0] + '.png'} />)}
            {attempts.length < 2 
                ? (<img className='BLANKGUESS' src={blankGuess} />) 
                : (<img className='NONBLANKGUESS' src={`${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[1] + '.png'} />)}
            {attempts.length < 3 
                ? (<img className='BLANKGUESS' src={blankGuess} />) 
                : (<img className='NONBLANKGUESS' src={`${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[2] + '.png'} />)}
            {attempts.length < 4 
                ? (<img className='BLANKGUESS' src={blankGuess} />) 
                : (<img className='NONBLANKGUESS' src={`${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[3] + '.png'} />)}
            {attempts.length < 5 
                ? (<img className='BLANKGUESS' src={blankGuess} />) 
                : (<img className='NONBLANKGUESS' src={`${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[4] + '.png'} />)}
            {attempts.length < 6 
                ? (<img className='BLANKGUESS' src={blankGuess} />) 
                : (<img className='NONBLANKGUESS' src={`${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[5] + '.png'} />)}
            {attempts.length < 7 
                ? (<img className='BLANKGUESS' src={blankGuess} />) 
                : (<img className='NONBLANKGUESS' src={`${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[6] + '.png'} />)}

        </div>

    )

}