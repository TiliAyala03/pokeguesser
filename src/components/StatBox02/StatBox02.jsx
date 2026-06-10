import { useState, useEffect } from 'react'
import './StatBox02.css'

export default function StatBox02({statName, statValue, hints, setHints, index})
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

    function textDecider(int)
    {

        if (hints[int] != 1)
        {

            return statName;

        }
        else
        {

            return statValue.toUpperCase();
        }

    }

    function classDecider(int)
    {

        if (hints[int] == 0)
        {

            return "STATBOX2CONTAINER";

        }
        else if (hints[int] == 1)
        {

            return `STATBOX2CONTAINER ${"USED"}`;

        }
        else if (hints[int] == 2)
        {

            return `STATBOX2CONTAINER ${"UNAVA"}`;

        }

    }

    return(

        <div className={classDecider(index)} onClick={() => handleClick()}>

            <p>{textDecider(index)}</p>

        </div>

    )

}