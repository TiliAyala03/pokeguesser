import { useState, useEffect } from 'react'
import './SuggestionBox.css'


export default function SuggestionBox({ pokemonNames, onSelect })
{

    const [input, setInput] = useState('');
    const filteredResults = pokemonNames.filter(name => name.toLowerCase().startsWith(input.toLowerCase())).slice(0,3);

    function handleClick(name)
    {

        onSelect(name);
        setInput('');

    }

    return(

        <div className ="WHOLE">

            <input 
                type="text" 
                className ="SEARCHBAR" 
                placeholder="Your guess..." 
                spellCheck="false"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {

                    if (
                        e.key === "Enter" &&
                        filteredResults.length > 0
                    ) {
                        handleClick(filteredResults[0]);
                    }

                }}
            />

            <div className = "BOX">
                
                {input.trim() != '' && filteredResults.map((name) => (

                    <div
                        key={name}
                        className='pokemonSuggestionContainerDiv'
                        onClick={() => handleClick(name)}
                    >
                        <img
                            className='pokemonIcon1'
                            src={`${import.meta.env.BASE_URL}pokemon_icons/${name.toLowerCase()}.png`}
                        />
                        <p>{name.toUpperCase()}</p>

                    </div>

                ))}

            </div>

        </div>

    );

}