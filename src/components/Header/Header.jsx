import { useState, useEffect } from 'react'
import './Header.css'

//IMAGES
import daily01 from '/res/daily01.png'
import daily02 from '/res/daily02.png'
import challenge01 from '/res/challenge01.png'
import challenge02 from '/res/challenge02.png'
import pokedex01 from '/res/pokedex01.png'
import pokedex02 from '/res/pokedex02.png'
import info01 from '/res/info01.png'
import info02 from '/res/info02.png'

export default function Header({ mode, setMode })
{
    
    function handleMode(selectedButton)
    {

        setMode(selectedButton);

    }

    return(
        
        <div id = "HEADER">

            <div id = "MODEBAR">

                <div className={`MODES ${mode === 'Daily' ? 'activeDaily' : ''}`} onClick={() => handleMode('Daily')}>
                    <img src={mode === 'Daily' ? daily02 : daily01} className='HEADERIMAGE'/>
                </div>

                <div className={`MODES ${mode === 'Challenge' ? 'activeChallenge' : ''}`} onClick={() => handleMode('Challenge')}>
                    <img src={mode === 'Challenge' ? challenge02 : challenge01} className='HEADERIMAGE'/>
                </div>

                <div className={`MODES ${mode === 'Pokedex' ? 'activePokedex' : ''}`} onClick={() => handleMode('Pokedex')}>
                    <img src={mode === 'Pokedex' ? pokedex02 : pokedex01} className='HEADERIMAGE'/>
                </div>
                
                <div className={`MODES ${mode === 'Info' ? 'activeInfo' : ''}`} onClick={() => handleMode('Info')}>
                    <img src={mode === 'Info' ? info02 : info01} className='HEADERIMAGE'/>
                </div>

            </div>

        </div>

    );

}
