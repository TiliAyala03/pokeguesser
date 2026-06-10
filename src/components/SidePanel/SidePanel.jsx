import { useState, useEffect } from 'react'
import './SidePanel.css'
import Guesses from '../Guesses/Guesses';
import Hints from '../Hints/Hints';
import AdBox from '../AdBox/AdBox';

export default function SidePanel({ mode, id, attempts, won, lost, gameReady })
{

    function classDecider()
    {

        if(mode == 'Daily' && (won === false && lost === false))
        {

            return("SMALLAD");

        }
        else
        {

            return("BIGAD");

        }

    }

    return(

        <div className = "CONTAINERADS">

            {mode === 'Daily' && id === 1 && (won === false && lost === false) && <Guesses attempts={attempts}/>}
            {mode === 'Daily' && id === 2 && (won === false && lost === false && gameReady === true) && <Hints attempts={attempts}/>}

            <div className={classDecider()}>

                <AdBox />

            </div>

        </div>

    );

}