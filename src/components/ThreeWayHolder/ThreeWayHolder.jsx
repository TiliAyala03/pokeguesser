import { useState, useEffect } from 'react'
import './ThreeWayHolder.css'

import DailyMode from '../DailyMode/DailyMode';
import SidePanel from '../SidePanel/SidePanel';
import Results from '../Results/Results';
import InfoMode from '../InfoMode/InfoMode';
import ChallengeMode from '../ChallengeMode/ChallengeMode';
import Pokedex from '../Pokedex/Pokedex';

export default function ThreeWayHolder({ mode, attempts, setAttempts })
{

    const [won, setWon] = useState(false);
    const [lost, setLost] = useState(false);
    const [gameReady, setGameReady] = useState(false);

    function toOrdinal(date = new Date()) 
    {
        const msPerDay = 24 * 60 * 60 * 1000;

        // Día base: 0001-01-01 (año 1)
        const base = new Date(1, 0, 1);

        return Math.floor((date - base) / msPerDay) + 1 + 693960;
    }

    const identifier = toOrdinal();

    useEffect(() => {

        if (localStorage.getItem("today") == identifier)
        {

            if(localStorage.getItem("hasWonToday") === "1")
            {
                setWon(true);
            }

            if(localStorage.getItem("lostToday") === "1")
            {
                setLost(true);
            }

        }
        else
        {
            setWon(false);
            setLost(false);
        }

    }, []);

    return(

        <div className = "THREEWAYHOLDER">
            <SidePanel mode={mode} id={1} attempts={attempts} won={won} lost={lost} gameReady={gameReady}/>

            {mode === 'Daily' && (won === false && lost === false) && 
                <DailyMode 
                    attempts={attempts} 
                    setAttempts={setAttempts} 
                    setWon={setWon} 
                    setLost={setLost}
                    setGameReady={setGameReady}
                />}
            {mode === 'Daily' && (won === true || lost === true) && 
                <Results 
                    attempts={attempts} 
                    won={won} 
                    lost={lost}
                />}
            
            {mode === 'Challenge' &&
                <ChallengeMode />}

            {mode === 'Pokedex' &&
                <Pokedex />}

            {mode === 'Info' &&
                <InfoMode />}

            <SidePanel mode={mode} id={2} attempts={attempts} won={won} lost={lost} gameReady={gameReady}/>
        </div>

    );

}