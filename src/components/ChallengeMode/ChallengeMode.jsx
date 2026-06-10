import { useState, useEffect } from 'react'
import './ChallengeMode.css'

import SuggestionBox from '../SuggestionBox/SuggestionBox'
import MicroGuesses from '../MicroGuesses/MicroGuesses'
import StatBox01 from '../StatBox01/StatBox01'
import StatBox02 from '../StatBox02/StatBox02'
import StreakBox from '../StreakBox/StreakBox'

//IMAGES
import challengeTitle from '/res/challengeLogo.png'
import blankRightAnswer from '/res/pokeball01.png'


export default function ChallengeMode()
{

    //STATES
    const[gameStatus, setGameStatus] = useState("Rules");

    const [pokemonNames, setPokemonNames] = useState([]);   //Retrieves a list of the 1025 Pokémon, nothing more.
    const[pokemon, setPokemon] = useState([]);              //pokemon = [name, type1, gen, bestStat, evStage, type2, ability, genus]

    const[rightAnswers, setRightAnswers] = useState([]);
    const[attempts, setAttempts] = useState([]);

    const[score, setScore] = useState(0);
    const[highScore, setHighScore] = useState(localStorage.getItem("highScore"));

    const[hints, setHints] = useState([0, 0, 0, 0, 0, 0, 0])

    const attemptsUsed = attempts.length;
    const lifeBarSrc = `${import.meta.env.BASE_URL}res/try${attemptsUsed + 1}.png`;

    //METHODS

    function handleGameStarted()
    {

        setGameStatus("Game");

    }

    function retryGame()
        {

            getPokemon(Math.floor(Math.random() * 1025));
            setGameStatus("Rules");

        }


    function handleSelect(pokemonGuessed)
    {

        if(pokemonGuessed === pokemon[0])
        {

            //RIGHT GUESS
            setRightAnswers(prev => [...prev, pokemonGuessed]);
            getPokemon(Math.floor(Math.random() * 1025));
            setAttempts([]);

            let newHints = [0, 0, 0, 0, 0, 0, 0];
            for (let i = 0; i < 7; i++)
            {

                if (hints[i] == 0)
                {

                    newHints[i] = 0;
                    
                }
                else if (hints[i] == 1)
                {

                    newHints[i] = 2;

                }
                else if (hints[i] == 2)
                {

                    newHints[i] = 0;

                }

            }

            setHints(newHints);

            let newScore = score + 1;

            setScore(newScore);

            if(newScore > highScore)
            {

                localStorage.setItem("highScore", newScore);
                setHighScore(localStorage.getItem("highScore"));

            }

        }
        else
        {

            if (attempts.length == 6)
            {

                setGameStatus("GameOver");
                setAttempts([]);
                setRightAnswers([]);
                setScore(0);
                setHints([0, 0, 0, 0, 0, 0, 0]);

            }
            else
            {

                setAttempts(prev => [...prev, pokemonGuessed]);

            }
            

        }
        

    }

    async function getPokemonJSON(index) 
    {
        const response = await fetch(`${import.meta.env.BASE_URL}pokemon_compact/pokemon_${index}.json`);
        const data = await response.json();
        return data;
    }

    async function getPokemon(index)
    {

        const pokemonJSON         = await getPokemonJSON(index);   

        //pokemon = [name, type1, gen, bestStat, evStage, type2, ability, genus]
        let name = pokemonJSON.name.toString();
        let type1 = pokemonJSON.type1.toString();
        let ability = pokemonJSON.ability.toString();
        let gen = pokemonJSON.gen.toString();
        let genus = pokemonJSON.genus.toString();
        let bestStat = pokemonJSON.bestStat.toString();
        let evStage = pokemonJSON.evStage.toString();
        let type2 = pokemonJSON.type2.toString();

        setPokemon([name, type1, gen, bestStat, evStage, type2, ability, genus]);

    }

    useEffect(() => {

        async function loadData()
        {
            
            const response = await fetch(`${import.meta.env.BASE_URL}order.json`);
            const data = await response.json();

            const names = data.map(item => item[1]);
            setPokemonNames(names);

        }

        if (localStorage.getItem("highScore") == null)
        {

            localStorage.setItem("highScore", 0);
            setHighScore(localStorage.getItem("highScore"));

        }

        loadData();

    }, []);

    useEffect(() => {getPokemon(Math.floor(Math.random() * 1025))}, []);

    if(gameStatus == "Rules")
    {

        return(

            <div className='RULESCONTAINER'>

                <img src={challengeTitle} className='CHALLENGELOGO'/>
                <p>Endless... If you're good enough.</p>

                <h2>RULES</h2>

                <div className='ACTUALRULES'>

                    <p>
                        Challenge Mode is a challenge where you have to guess several Pokémon, one after another, until you run out of attempts. 
                        You have 7 attempts per Pokémon. Your health bar will refill each time you guess a Pokémon correctly, so you don't have to worry about 
                        using too many attempts on a single one.
                    </p>

                    <p>
                        However, Challenge Mode doesn't work the same way as Daily Mode. You'll have to choose which of the seven available clues you want to reveal in 
                        order to guess the Pokémon and move on to the next round. But be careful — <span className='REDTEXT'> any clues you use in one round won't be available in the next</span>, so choose wisely.
                    </p>

                    <p>
                        Challenge Mode is intended to be very difficult, so try your best. You may play up to three times per day. How long those games come to be 
                        depends on your own knowledge. Good luck, and have fun!
                    </p>

                </div>

                <div className='PLAYBUTTON' onClick={() => handleGameStarted()}>
                    <h3>PLAY</h3>
                </div>

            </div>

        );

    }
    else if (gameStatus == "Game")
    {

        return(

            <div className='CHALLENGECONTAINER'>

                <div className='RIGHTANSWERSBOXEXT'>
                    <div className='RIGHTANSWERSBOXINT'>
                    
                    {rightAnswers.map((name) => (
                        <img
                            key={name}
                            className='RIGHTANSWER'
                            src={`${import.meta.env.BASE_URL}pokemon_icons_pixel/` + name + '.png'}
                        />
                    ))}

                    <img
                        className='RIGHTANSWERBLANK'
                        src={blankRightAnswer}
                    />

                    </div>
                </div>

                <img className='LIFEBARCHALLENGE' src={lifeBarSrc} />

                <MicroGuesses
                    attempts={attempts}
                />

                <SuggestionBox 
                    pokemonNames={pokemonNames}
                    onSelect={handleSelect}
                />

                <div className='STATSCONTAINER01'>

                    <StatBox01
                        statName={'1ST TYPE'}
                        statValue={pokemon[1]}
                        hints={hints}
                        setHints={setHints}
                        index={0}
                    />
                    <StatBox01
                        statName={'GEN.'}
                        statValue={pokemon[2]}
                        hints={hints}
                        setHints={setHints}
                        index={1}
                    />
                    <StatBox01
                        statName={'BEST STAT'}
                        statValue={pokemon[3]}
                        hints={hints}
                        setHints={setHints}
                        index={2}
                    />
                    <StatBox01
                        statName={'EV. STAGE'}
                        statValue={pokemon[4]}
                        hints={hints}
                        setHints={setHints}
                        index={3}
                    />
                    <StatBox01
                        statName={'2ND TYPE'}
                        statValue={pokemon[5]}
                        hints={hints}
                        setHints={setHints}
                        index={4}
                    />

                </div>
                <div className='STATSCONTAINER02'>

                    <StatBox02
                        statName={'ABILITY'}
                        statValue={pokemon[6]}
                        hints={hints}
                        setHints={setHints}
                        index={5}
                    />
                    <StatBox02
                        statName={'DEXGENUS'}
                        statValue={pokemon[7]}
                        hints={hints}
                        setHints={setHints}
                        index={6}
                    />

                </div>

                <div className='STREAKCONTAINER'>

                    <StreakBox
                        text={"CURRENT SCORE"}
                        value={score}
                    />
                    <StreakBox
                        text={"HIGHEST SCORE"}
                        value={highScore}
                    />

                </div>

            </div>
            

        );

    }
    else if (gameStatus == "GameOver")
    {

        return(

            <div className='GAMEOVERSCREEN'>

            <h1 className='GAMEOVERTITLE'>GAME OVER</h1>
            <p>The right answer was...</p>

            <img src={`${import.meta.env.BASE_URL}pokemon_icons/` + pokemon[0] + '.png'} />
            <h2 className='GAMEOVERPOKEMON'>{pokemon[0].toUpperCase()}</h2>

            <p>Try again and beat your previous score! <br></br> Make sure to distribute your hints as good as possible!</p>

            <div className='RETRYBUTTON' onClick={() => retryGame()}>RETRY</div> 

            </div>

        )

    }

}