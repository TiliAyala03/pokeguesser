import { useState, useEffect } from 'react'
import './Guesses.css'

//IMAGES
import emptyGuess from '/res/pokeball01.png'

let guess1 = `${import.meta.env.BASE_URL}res/pokeball01.png`
let guess2 = `${import.meta.env.BASE_URL}res/pokeball01.png`
let guess3 = `${import.meta.env.BASE_URL}res/pokeball01.png`
let guess4 = `${import.meta.env.BASE_URL}res/pokeball01.png`
let guess5 = `${import.meta.env.BASE_URL}res/pokeball01.png`
let guess6 = `${import.meta.env.BASE_URL}res/pokeball01.png`


export default function Guesses({ attempts })
{

    switch (attempts.length)
    {

        case 0:
            break;
        case 1:
            guess1 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 1] + '.png';
            break;
        case 2:
            guess1 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 2] + '.png';
            guess2 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 1] + '.png';
            break;
        case 3:
            guess1 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 3] + '.png';
            guess2 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 2] + '.png';
            guess3 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 1] + '.png';
            break;
        case 4:
            guess1 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 4] + '.png';
            guess2 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 3] + '.png';
            guess3 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 2] + '.png';
            guess4 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 1] + '.png';
            break;
        case 5:
            guess1 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 5] + '.png';
            guess2 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 4] + '.png';
            guess3 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 3] + '.png';
            guess4 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 2] + '.png';
            guess5 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 1] + '.png';
            break;
        case 6:
            guess1 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 6] + '.png';
            guess2 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 5] + '.png';
            guess3 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 4] + '.png';
            guess4 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 3] + '.png';
            guess5 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 2] + '.png';
            guess6 = `${import.meta.env.BASE_URL}pokemon_icons_pixel/` + attempts[attempts.length - 1] + '.png';
            break;

    }

    return(

        <div className = "GUESSESCONTAINER">

            <h3>YOUR GUESSES</h3>

            <div className ="GUESSESCONTAINER2">

                <img src= {guess1} className = {`GUESSES ${attempts.length >= 1 ? 'made' : ''}`} draggable="false" />
                <img src= {guess2} className = {`GUESSES ${attempts.length >= 2 ? 'made' : ''}`} draggable="false" />
                <img src= {guess3} className = {`GUESSES ${attempts.length >= 3 ? 'made' : ''}`} draggable="false" />
                <img src= {guess4} className = {`GUESSES ${attempts.length >= 4 ? 'made' : ''}`} draggable="false" />
                <img src= {guess5} className = {`GUESSES ${attempts.length >= 5 ? 'made' : ''}`} draggable="false" />
                <img src= {guess6} className = {`GUESSES ${attempts.length >= 6 ? 'made' : ''}`} draggable="false" />

            </div>

        </div>

    );

}