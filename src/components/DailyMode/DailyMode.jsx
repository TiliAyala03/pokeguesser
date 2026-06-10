import { useState, useEffect, useMemo } from 'react'
import './DailyMode.css'
import SuggestionBox from '../SuggestionBox/SuggestionBox'

//RESOURCES

import title from '/res/logo.png'

function getDailyNumber()
{

    const pokemonAmount = 1025;

    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

    let x = Math.sin(seed) * 10000;
    return Math.floor((x - Math.floor(x)) * pokemonAmount);

}

function toOrdinal(date = new Date()) {
  const msPerDay = 24 * 60 * 60 * 1000;

  // Día base: 0001-01-01 (año 1)
  const base = new Date(1, 0, 1);

  return Math.floor((date - base) / msPerDay) + 1 + 693960;
}

function getTypeColor(type)
{

    switch(type)
    {

        case "normal":
            return "rgb(125, 125, 125)";
            break;
        case "fighting":
            return "rgb(221, 104, 0)";
            break;
        case "flying":
            return "rgb(141, 252, 255)";
            break;
        case "poison":
            return "rgb(236, 27, 253)";
            break;
        case "ground":
            return "rgb(103, 69, 22)";
            break;
        case "rock":
            return "rgb(158, 149, 136)";
            break;
        case "bug":
            return "rgb(196, 255, 86)";
            break;
        case "ghost":
            return "rgb(131, 44, 253)";
            break;
        case "steel":
            return "rgb(181, 199, 200)";
            break;
        case "fire":
            return "rgb(255, 39, 39)";
            break;
        case "water":
            return "rgb(39, 203, 255)";
            break;
        case "grass":
            return "rgb(85, 255, 39)";
            break;
        case "electric":
            return "rgb(252, 255, 39)";
            break;
        case "psychic":
            return "rgb(255, 39, 185)";
            break;
        case "ice":
            return "rgb(215, 254, 255)";
            break;
        case "dragon":
            return "rgb(98, 40, 255)";
            break;
        case "dark":
            return "rgb(107, 107, 107)";
            break;
        case "fairy":
            return "rgb(251, 199, 255)";
            break;
            
    }

}

function getGenColor(gen)
{

    switch(gen)
    {

        case "Generation I":
            return "rgb(255, 59, 40)";
            break;
        case "Generation II":
            return "rgb(255, 185, 59)";
            break;
        case "Generation III":
            return "rgb(82, 192, 77)";
            break;
        case "Generation IV":
            return "rgb(90, 187, 232)";
            break;
        case "Generation V":
            return "rgb(207, 207, 207)";
            break;
        case "Generation VI":
            return "rgb(214, 49, 150)";
            break;
        case "Generation VII":
            return "rgb(82, 231, 153)";
            break;
        case "Generation VIII":
            return "rgb(96, 82, 231)";
            break;
        case "Generation IX":
            return "rgb(96, 40, 147)";
            break;


    }

}

function getStatColor (stat)
{

    switch(stat)
    {

        case "HP":
            return "rgb(76, 224, 56)";
            break;
        case "ATTACK":
            return "rgb(224, 76, 56)";
            break;
        case "DEFENSE":
            return "rgb(224, 137, 56)";
            break;
        case "SPECIAL ATTACK":
            return "rgb(220, 56, 224)";
            break;
        case "SPECIAL DEFENSE":
            return "rgb(243, 232, 57)";
            break;
        case "SPEED":
            return "rgb(46, 218, 230)";
            break;

    }

}

export default function DailyMode({ attempts, setAttempts, setWon, setLost, setGameReady })
{

    const [pokemonNames, setPokemonNames] = useState([]);

    const attemptsUsed = attempts.length;
    const lifeBarSrc = `${import.meta.env.BASE_URL}res/try${attemptsUsed + 1}.png`;

    const [loaded, setLoaded] = useState(false);
    const [rightPokemon, setRightPokemon] = useState('');

    function handleSelect(pokemon)
    {

        setAttempts(prev => [...prev, pokemon]);
        let hintToUpdate = attempts.length + 1;

        localStorage.setItem("guess" + hintToUpdate.toString(), pokemon);
        
        //Player wins
        if (pokemon == rightPokemon)
        {

            const gamesPlayed = parseInt(localStorage.getItem("gamesPlayed")) + 1;
            localStorage.setItem("gamesPlayed", gamesPlayed);
            const gamesWon = parseInt(localStorage.getItem("winRate")) + 1;
            localStorage.setItem("winRate", gamesWon);
            const streak = parseInt(localStorage.getItem("streak")) + 1;
            localStorage.setItem("streak", streak);

            const pokedexLSName = "pokedex";
            let pokedex = JSON.parse(localStorage.getItem(pokedexLSName)) || [];

            if (pokedex.includes(rightPokemon))
            {

                //haha nothing

            }
            else
            {

                pokedex.push(rightPokemon);
                localStorage.setItem(pokedexLSName, JSON.stringify(pokedex));

            }

            localStorage.setItem("hasWonToday", 1);
            setWon(true);

            

        }

        //Player loses
        else if (attemptsUsed == 6)
        {

            localStorage.setItem("lostToday", 1);
            localStorage.setItem("streak", 0);
            const gamesPlayed = parseInt(localStorage.getItem("gamesPlayed")) + 1;
            localStorage.setItem("gamesPlayed", gamesPlayed);

            localStorage.setItem("lostToday", 1);
            setLost(true);

        }

    }

    useEffect(() => {

        async function loadData()
        {
            
            const response = await fetch(`${import.meta.env.BASE_URL}order.json`);
            const data = await response.json();

            const names = data.map(item => item[1]);
            setPokemonNames(names);

        }

        async function dataManagement() //This function takes care of managing the data once the user enters the website
        {

            const identifier = toOrdinal();

            if (localStorage.getItem("today") == null)  //Checks if the flag "today" has something. If it happens to be null, that means that it is the
                                                        //first time the player joins the website. It's then time to create all the local data from scratch.
            {   

                //== LOCAL VARIABLES ==//

                localStorage.setItem("today", identifier);  //The flag "today" is set to the current day identifier.
                localStorage.setItem("gamesPlayed", 0);     //The flag "gamesPlayed" is set to 0, since the player is new.
                localStorage.setItem("winRate", 0);         //The flag "winRate" is set to 0, since the player is new.
                localStorage.setItem("streak", 0);          //The flag "streak" is set to 0, since the player is new.
                localStorage.setItem("currentAttempt", 0);  //The flag "currentAttempt" is set to 0, since the player is new.
                localStorage.setItem("hasWonToday", 0);     //The flag "hasWonToday" is set to 0, since the player is new.
                localStorage.setItem("lostToday", 0);       //The flag "lostToday" is set to 0, since the player is new.

                localStorage.setItem("hint1", null);        //The flag "hint1" fills the content of the Primary Type Hint.      It is by default null until it gets filled.
                localStorage.setItem("hint2", null);        //The flag "hint2" fills the content of the Ability Hint.           It is by default null until it gets filled.
                localStorage.setItem("hint3", null);        //The flag "hint3" fills the content of the Generation Hint.        It is by default null until it gets filled.
                localStorage.setItem("hint4", null);        //The flag "hint4" fills the content of the Genus Hint.             It is by default null until it gets filled.
                localStorage.setItem("hint5", null);        //The flag "hint5" fills the content of the Strongest Stat Hint.    It is by default null until it gets filled.
                localStorage.setItem("hint6", null);        //The flag "hint6" fills the content of the Evolution Hint.         It is by default null until it gets filled.
                localStorage.setItem("hint7", null);        //The flag "hint7" fills the content of the Secondary Type Hint.    It is by default null until it gets filled.

                localStorage.setItem("guess1", null);       //The flag "guess1" contains the 1st guess of the user. It's null until the user makes a guess.
                localStorage.setItem("guess2", null);       //The flag "guess2" contains the 2nd guess of the user. It's null until the user makes a guess.
                localStorage.setItem("guess3", null);       //The flag "guess3" contains the 3rd guess of the user. It's null until the user makes a guess.
                localStorage.setItem("guess4", null);       //The flag "guess4" contains the 4th guess of the user. It's null until the user makes a guess.
                localStorage.setItem("guess5", null);       //The flag "guess5" contains the 5th guess of the user. It's null until the user makes a guess.
                localStorage.setItem("guess6", null);       //The flag "guess6" contains the 6th guess of the user. It's null until the user makes a guess.
                localStorage.setItem("guess7", null);       //The flag "guess7" contains the 7th guess of the user. It's null until the user makes a guess.

                await buildGame();                                //With all the data managed correctly for a first time entrance, the game is built.

            }
            else            //This is the scenario where the player does have data registered, thus it is necessary to manage the page to adjust the components
            {

                if (localStorage.getItem("today") == identifier)    //If the flag "today" is the same as today's identifier, it means the player has already
                                                                    //entered before during this day. His data needs to be checked.
                {

                    if (localStorage.getItem("hasWonToday") == 1 || localStorage.getItem("lostToday") == 1) //Checks if any of the "hasWonToday" or "lostToday" flags are
                                                                                                            //active, which would take the user to the results page.
                    {

                        //window.location.href = resultsPage;         //Take the user to the results page.

                    }
                    else
                    {

                        //First, we need to restore the attempts that the user already had. Then, the game is built with that information.
                        const restoredAttempts = [];

                        for (let i = 1; i <= 7; i++) {

                            const guess = localStorage.getItem("guess" + i);

                            if (guess !== "null" && guess !== null) {
                                restoredAttempts.push(guess);
                            }

                        }

                        setAttempts(restoredAttempts);


                        await buildGame();

                    }

                }
                else                                                //If the flag "today" isn't the same as today's identifier, it means the player has entered
                                                                    //for the first time today. The data from the previous day must be wiped so the game can be
                                                                    //built.
                {

                    localStorage.setItem("today", identifier);      //The "today" flag gets updated to match today's identifier.

                    localStorage.setItem("currentAttempt", 0);      //The "currentAttempt" flag gets reset to 0.
                    localStorage.setItem("hasWonToday", 0);         //The "hasWonToday"    flag gets reset to 0.
                    localStorage.setItem("lostToday", 0);           //The "lostToday"      flag gets reset to 0.

                    localStorage.setItem("hint1", null);            //The Primary Type      Hint gets reset to null.
                    localStorage.setItem("hint2", null);            //The Ability           Hint gets reset to null.
                    localStorage.setItem("hint3", null);            //The Generation        Hint gets reset to null.
                    localStorage.setItem("hint4", null);            //The Genus             Hint gets reset to null.
                    localStorage.setItem("hint5", null);            //The Strongest Stat    Hint gets reset to null.
                    localStorage.setItem("hint6", null);            //The Evolution Stage   Hint gets reset to null.
                    localStorage.setItem("hint7", null);            //The Secondary Type    Hint gets reset to null.

                    localStorage.setItem("guess1", null);           //All the user's guesses get reset to null.
                    localStorage.setItem("guess2", null);           //All the user's guesses get reset to null.
                    localStorage.setItem("guess3", null);           //All the user's guesses get reset to null.
                    localStorage.setItem("guess4", null);           //All the user's guesses get reset to null.
                    localStorage.setItem("guess5", null);           //All the user's guesses get reset to null.
                    localStorage.setItem("guess6", null);           //All the user's guesses get reset to null.
                    localStorage.setItem("guess7", null);           //All the user's guesses get reset to null.

                    await buildGame();                              //The game is built after managing the data correctly.

                }

            }

        }

        async function initialize()
        {
            await loadData();
            await dataManagement();

            setGameReady(true);
        }

        initialize();

    }, []);
    
    const dailyNumber = useMemo(() => getDailyNumber(), []);

    const identifier = toOrdinal();

    async function getPokemonJSON() 
    {
        const response = await fetch(`${import.meta.env.BASE_URL}pokemon_compact/pokemon_${dailyNumber}.json`);
        const data = await response.json();
        return data;
    }

    async function buildGame()              //This function takes all the content of the page and changes its properties accordingly.
    {

        const pokemonJSON         = await getPokemonJSON();               //Retrieves the Pokémon Data of the daily Pokémon.

        setRightPokemon(pokemonJSON.name.toString());

        localStorage.setItem("hint1", pokemonJSON.type1);          //Sets the "hint1" flag with the first type of the Pokémon.
        localStorage.setItem("hint2", pokemonJSON.ability);   //Sets the "hint2" flag with the first ability of the Pokémon.
        localStorage.setItem("hint3", pokemonJSON.gen);      //Sets the "hint3" flag with the generation that this Pokémon comes from.

        localStorage.setItem("hint4", pokemonJSON.genus);
        localStorage.setItem("hint5", pokemonJSON.bestStat);

        //HINT 6: SAY IF IT'S A FIRST STAGE EVOLUTION
        if (pokemonJSON.evStage == "firstStage")
        {

            localStorage.setItem("hint6", null);

        }
        else
        {

            localStorage.setItem("hint6", pokemonJSON.evStage);

        }

        //HINT 7: SECONDARY TYPE
        if (pokemonJSON.type2 == "none")
        {

            localStorage.setItem("hint7", null);

        }
        else
        {

            localStorage.setItem("hint7", pokemonJSON.type2);

        }

        switch(localStorage.getItem("hint3"))
        {

            case "generation-i":
                localStorage.setItem("hint3", "Generation I");
                break;
            case "generation-ii":
                localStorage.setItem("hint3", "Generation II");
                break;
            case "generation-iii":
                localStorage.setItem("hint3", "Generation III");
                break;
            case "generation-iv":
                localStorage.setItem("hint3", "Generation IV");
                break;
            case "generation-v":
                localStorage.setItem("hint3", "Generation V");
                break;
            case "generation-vi":
                localStorage.setItem("hint3", "Generation VI");
                break;
            case "generation-vii":
                localStorage.setItem("hint3", "Generation VII");
                break;
            case "generation-viii":
                localStorage.setItem("hint3", "Generation VIII");
                break;
            case "generation-ix":
                localStorage.setItem("hint3", "Generation IX");
                break;

        }

        switch(localStorage.getItem("hint5"))
        {

            case "hp":
                localStorage.setItem("hint5", "HP");
                break;
            case "attack":
                localStorage.setItem("hint5", "ATTACK");
                break;
            case "defense":
                localStorage.setItem("hint5", "DEFENSE");
                break;
            case "specialAttack":
                localStorage.setItem("hint5", "SPECIAL ATTACK");
                break;
            case "specialDefense":
                localStorage.setItem("hint5", "SPECIAL DEFENSE");
                break;
            case "speed":
                localStorage.setItem("hint5", "SPEED");
                break;

        }
        
        setLoaded(true);

    }

    let currentHint = {

        text: "Loading",
        value: "hint...",
        color: "white"

    };

    switch(attempts.length)
    {

        case 0:
            currentHint = {

                text: "The pokémon's primary type is",
                value: localStorage.getItem("hint1"),
                color: getTypeColor(localStorage.getItem("hint1"))

            };
            break;
        case 1:
            currentHint = {

                text: "The pokémon has the ability",
                value: localStorage.getItem("hint2"),
                color: "white"

            };
            break;
        case 2:
            currentHint = {

                text: "The pokémon is from",
                value: localStorage.getItem("hint3"),
                color: getGenColor(localStorage.getItem("hint3"))

            };
            break;
        case 3:
            currentHint = {

                text: "According to the pokédex, this pokémon is the",
                value: localStorage.getItem("hint4"),
                color: "white"

            };
            break;
        case 4:
            currentHint = {

                text: "The pokémon's strongest stat is its",
                value: localStorage.getItem("hint5"),
                color: getStatColor(localStorage.getItem("hint5"))

            };
            break;
        case 5:

            if(localStorage.getItem("hint6") == "null")
            {

                currentHint = {

                    text: "The pokémon is a",
                    value: "FIRST STAGE EVOLUTION",
                    color: "rgb(240, 127, 51)"

                };

            }
            else
            {

                currentHint = {

                    text: "The pokémon has",
                    value: "ALREADY EVOLVED at least ONCE",
                    color: "rgb(51, 240, 136)"

                };

            }
            
            break;
        case 6:

            if(localStorage.getItem("hint7") == "null")
            {

                currentHint = {

                    text: "The pokémon doesn't have a",
                    value: "secondary type",
                    color: "rgb(155, 155, 155)"

                };

            }
            else
            {

                currentHint = {

                    text: "The pokémon's secondary type is",
                    value: localStorage.getItem("hint7").toString(),
                    color: getTypeColor(localStorage.getItem("hint7"))

                };

            }


    }

    if(!loaded)
    {

        return <p>Loading...</p>

    }
    else
    {

        return(

            <div className = "MAIN">

                <img src = {title} id = "LOGO"></img>
                <p className='NORMALTEXT'>Guess today's Pokémon! Good luck!</p>

                <img src = {lifeBarSrc} id = "LIFEBAR"></img>
                <p className='NORMALTEXT'>

                    {currentHint.text}{' '}
                    <span className='bold-text' style= {{ color: currentHint.color }}>
                        {currentHint.value}
                    </span>

                </p>

                <SuggestionBox 
                    pokemonNames={pokemonNames}
                    onSelect={handleSelect}
                />

            </div>

        );

    }
    

}