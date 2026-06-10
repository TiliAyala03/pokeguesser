import { useState, useEffect, useMemo, use } from 'react'
import './Results.css'

import GuessesResults from '../GuessesResults/GuessesResults';
import InfoBox from '../InfoBox/InfoBox';
import Hints from '../Hints/Hints';

export default function Results({ attempts, won, lost, setWon, setLost })
{
    
    const [rightPokemonResults, setRightPokemonResults] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [pokemonSRC, setPokemonSRC] = useState(null);
    const [countdown, setCountdown] = useState("");

    const winRate = parseInt(localStorage.getItem("winRate"))/(parseInt(localStorage.getItem("gamesPlayed")))*100;
    const gamesPlayed = localStorage.getItem("gamesPlayed");
    const streak = localStorage.getItem("streak");

    const fakeAttempts = [1, 2, 3, 4, 5, 6];

    function toOrdinal(date = new Date()) 
    {
        const msPerDay = 24 * 60 * 60 * 1000;

        // Día base: 0001-01-01 (año 1)
        const base = new Date(1, 0, 1);

        return Math.floor((date - base) / msPerDay) + 1 + 693960;
    }

    function getDailyNumber()
    {

        const pokemonAmount = 1025;

        const today = new Date();
        const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

        let x = Math.sin(seed) * 10000;
        return Math.floor((x - Math.floor(x)) * pokemonAmount);

    }

    const identifier = toOrdinal();
    const dailyNumber = useMemo(() => getDailyNumber(), []);

    async function getPokemonJSON() 
    {
        const response = await fetch(`${import.meta.env.BASE_URL}pokemon_compact/pokemon_${dailyNumber}.json`);
        const data = await response.json();
        return data;
    }

    useEffect(()=>{

        async function loadMon()
        {

            const pokemonJSON         = await getPokemonJSON();
            console.log(pokemonJSON);
            setRightPokemonResults(pokemonJSON.name.toString());

            switch(rightPokemonResults)
            {

                case "deoxys-normal":
                    setRightPokemonResults("deoxys");
                    break;

                case "wormadam-plant":
                    setRightPokemonResults("wormadam");
                    break;

                case "giratina-altered":
                    setRightPokemonResults("giratina");
                    break;

                case "shaymin-land":
                    setRightPokemonResults("shaymin");
                    break;

                case "basculin-red-striped":
                    setRightPokemonResults("basculin");
                    break;

                case "darmanitan-standard":
                    setRightPokemonResults("darmanitan");
                    break;

                case "tornadus-incarnate":
                    setRightPokemonResults("tornadus");
                    break;

                case "thundurus-incarnate":
                    setRightPokemonResults("thundurus");
                    break;

                case "landorus-incarnate":
                    setRightPokemonResults("landorus");
                    break;

                case "keldeo-ordinary":
                    setRightPokemonResults("keldeo");
                    break;

                case "meloetta-aria":
                    setRightPokemonResults("meloetta");
                    break;

                case "meowstic-male":
                    setRightPokemonResults("meowstic");
                    break;

                case "aegislash-shield":
                    setRightPokemonResults("aegislash");
                    break;

                case "pumpkaboo-average":
                    setRightPokemonResults("pumpkaboo");
                    break;

                case "gourgeist-average":
                    setRightPokemonResults("gourgeist");
                    break;

                case "zygarde-50":
                    setRightPokemonResults("zygarde");
                    break;

                case "oricorio-baile":
                    setRightPokemonResults("oricorio");
                    break;

                case "lycanroc-midday":
                    setRightPokemonResults("lycanroc");
                    break;

                case "wishiwashi-solo":
                    setRightPokemonResults("wishiwashi");
                    break;

                case "minior-red-meteor":
                    setRightPokemonResults("minior");
                    break;

                case "mimikyu-disguised":
                    setRightPokemonResults("mimikyu");
                    break;

                case "toxtricity-amped":
                    setRightPokemonResults("toxtricity");
                    break;

                case "eiscue-ice":
                    setRightPokemonResults("eiscue");
                    break;

                case "indeedee-male":
                    setRightPokemonResults("indeedee");
                    break;

                case "morpeko-full-belly":
                    setRightPokemonResults("morpeko");
                    break;

                case "urshifu-single-strike":
                    setRightPokemonResults("urshifu");
                    break;

                case "basculegion-male":
                    setRightPokemonResults("basculegion");
                    break;

                case "enamorus-incarnate":
                    setRightPokemonResults("enamorus");
                    break;

                case "oinkologne-male":
                    setRightPokemonResults("oinkologne");
                    break;

                case "maushold-family-of-four":
                    setRightPokemonResults("maushold");
                    break;

                case "squawkabilly-green-plumage":
                    setRightPokemonResults("squawkabilly");
                    break;

                case "palafin-zero":
                    setRightPokemonResults("palafin");
                    break;

                case "tatsugiri-curly":
                    setRightPokemonResults("tatsugiri");
                    break;

                case "dudunsparce-two-segment":
                    setRightPokemonResults("dudunsparce");
                    break;

                default:
                    break;
                
            }

            setPokemonSRC("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+ dailyNumber +".png");
            setLoaded(true);

        }

        loadMon();

    }, []);

    function getCountdown() 
    {

        const now = new Date();

        const target = new Date(
            Date.UTC(
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate() + 1,
                0,
                0,
                0
            ) + 5 * 60 * 60 * 1000
        );

        const remaining = target - now;

        const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((remaining / (1000 * 60)) % 60);
        const seconds = Math.floor((remaining / 1000) % 60);

        return (
            `${hours.toString().padStart(2, '0')} : ` +
            `${minutes.toString().padStart(2, '0')} : ` +
            `${seconds.toString().padStart(2, '0')}`
        );
    }

    useEffect(() => { 

        setCountdown(getCountdown()); 

        const interval = setInterval(() => { 

            setCountdown(getCountdown()); 

        }, 1000); 

            return () => clearInterval(interval); 

    }, []);

    useEffect(() => {

        const date = toOrdinal();

        if(date.toString() != localStorage.getItem("today"))
        {

            window.location.reload();

        }

    }, []);


    if (loaded != true)
    {

        return <p>Loading...</p>

    }
    else
    {

        return(

            <div className='MAINRESULTS'>

                <p className='PRETITLE'>Today's Pokémon is</p>
                <h1 className='TITLE'>{rightPokemonResults.toUpperCase()}</h1>
                <img className='POKEMONIMAGERESULTS' src={pokemonSRC}></img>
                <p>Thank you for playing!<br/>Come back for tomorrow's:</p>
                <h1 className='COUNTDOWN'>{countdown}</h1>
                <p className='SUBTITLE'>YOUR GUESSES:</p>

                <GuessesResults rightPokemonResults={rightPokemonResults}/>
                <div className='STATSCONTAINER'>

                    <InfoBox title="GAMES PLAYED" value={gamesPlayed}/>
                    <InfoBox title="WIN RATE (%)" value={winRate}/>
                    <InfoBox title="WIN STREAK" value={streak}/>

                </div>

                <Hints attempts={fakeAttempts} />

            </div>

        )

    }
    

}