import { useState, useEffect } from 'react'
import './StatBox01.css'

import hintImage from '/res/unknown.png'

export default function StatBox01({statName, statValue, hints, setHints, index})
{

    function handleClick()
    {

        if (hints[index] == 0)
        {

            switch (index)
            {

                case 0:
                    setHints(prev => [1, prev[1], prev[2], prev[3], prev[4], prev[5], prev[6]]);
                    break;
                case 1:
                    setHints(prev => [prev[0], 1, prev[2], prev[3], prev[4], prev[5], prev[6]]);
                    break;
                case 2:
                    setHints(prev => [prev[0], prev[1], 1, prev[3], prev[4], prev[5], prev[6]]);
                    break;
                case 3:
                    setHints(prev => [prev[0], prev[1], prev[2],1, prev[4], prev[5], prev[6]]);
                    break;
                case 4:
                    setHints(prev => [prev[0], prev[1], prev[2], prev[3], 1, prev[5], prev[6]]);
                    break;
                case 5:
                    setHints(prev => [prev[0], prev[1], prev[2], prev[3], prev[4], 1, prev[6]]);
                    break;
                case 6:
                    setHints(prev => [prev[0], prev[1], prev[2], prev[3], prev[4], prev[5], 1]);
                    break;

            }

        }

    }

    function imageDecider(int)
    {

        if (hints[int] != 1)
        {

            return hintImage;

        }
        else
        {

            switch (index)
            {

                //1ST TYPE
                case 0:                 
                    return (`${import.meta.env.BASE_URL}res/` + statValue + '.png');
                    break;
                //GEN
                case 1:
                    switch (statValue)
                    {

                        case 'generation-i':
                            return (`${import.meta.env.BASE_URL}res/genI.png`);
                            break;
                        case 'generation-ii':
                            return (`${import.meta.env.BASE_URL}res/genII.png`);
                            break;
                        case 'generation-iii':
                            return (`${import.meta.env.BASE_URL}res/genIII.png`);
                            break;
                        case 'generation-iv':
                            return (`${import.meta.env.BASE_URL}res/genIV.png`);
                            break;
                        case 'generation-v':
                            return (`${import.meta.env.BASE_URL}res/genV.png`);
                            break;
                        case 'generation-vi':
                            return (`${import.meta.env.BASE_URL}res/genVI.png`);
                            break;
                        case 'generation-vii':
                            return (`${import.meta.env.BASE_URL}res/genVII.png`);
                            break;
                        case 'generation-viii':
                            return (`${import.meta.env.BASE_URL}res/genVIII.png`);
                            break;
                        case 'generation-ix':
                            return (`${import.meta.env.BASE_URL}res/genIX.png`);
                            break;

                    }
                    break;
                //BEST STAT
                case 2:
                    return (`${import.meta.env.BASE_URL}res/` + statValue + '.png');
                    break;
                //EV. STAGE
                case 3:
                    if (statValue == "firstStage")
                    {

                        return (`${import.meta.env.BASE_URL}res/firstEvo.png`);

                    }
                    else
                    {

                        return (`${import.meta.env.BASE_URL}res/evolved.png`);

                    }
                    break;
                //SECOND TYPE
                case 4:
                    return (`${import.meta.env.BASE_URL}res/` + statValue + '.png');
                    break;
                
            }

        }
        

    }
    function textDecider(int)
    {

        if (hints[int] != 1)
        {

            return statName;

        }
        else
        {

            switch (index)
            {

                //1ST TYPE
                case 0:                 
                    return statValue.toUpperCase();
                    break;
                //GEN
                case 1:
                    switch (statValue)
                    {

                        case 'generation-i':
                            return 'GEN I';
                            break;
                        case 'generation-ii':
                            return 'GEN II';
                            break;
                        case 'generation-iii':
                            return 'GEN III';
                            break;
                        case 'generation-iv':
                            return 'GEN IV';
                            break;
                        case 'generation-v':
                            return 'GEN V';
                            break;
                        case 'generation-vi':
                            return 'GEN VI';
                            break;
                        case 'generation-vii':
                            return 'GEN VII';
                            break;
                        case 'generation-viii':
                            return 'GEN VIII';
                            break;
                        case 'generation-ix':
                            return 'GEN IX';
                            break;

                    }
                    break;
                //BEST STAT
                case 2:
                    if (statValue == 'specialAttack')
                    {
                        return 'SP. ATTACK';
                    }
                    else if (statValue == 'specialDefense')
                    {
                        return 'SP. DEFENSE';
                    }
                    else
                    {
                        return statValue.toUpperCase();
                    }
                    break;
                //EV. STAGE
                case 3:
                    if (statValue == "firstStage")
                    {

                        return "1ST STAGE";

                    }
                    else
                    {

                        return "EVOLVED";

                    }
                    break;
                //SECOND TYPE
                case 4:
                    return statValue.toUpperCase();
                    break;
                
            }

        }

    }

    function classDecider(int)
    {

        if (hints[int] == 0)
        {

            return "STATBOX1CONTAINER";

        }
        else if (hints[int] == 1)
        {

            return `STATBOX1CONTAINER ${statValue.toUpperCase()}`;

        }
        else if (hints[int] == 2)
        {

            return `STATBOX1CONTAINER ${"UNAVA"}`;

        }

    }

    return(

        <div className={classDecider(index)} onClick={() => handleClick()}>

            <img className='ICONHINTS' src={imageDecider(index)} />
            <p>{textDecider(index)}</p>

        </div>

    )

    

}