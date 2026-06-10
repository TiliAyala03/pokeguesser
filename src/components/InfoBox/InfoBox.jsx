import { useState, useEffect, useMemo, use } from 'react'
import './InfoBox.css'

export default function InfoBox({ title, value })
{

    function getClass(valueF)
    {
        if (valueF > 90) return "textLegendary";
        if (valueF > 70) return "textEpic";
        if (valueF > 40) return "textVeryGood";
        if (valueF > 15) return "textGood";
        if (valueF > 0) return "textNormal";

        return "textNone";
    }

    return(

        <div className='INFOBOX'>

            <h4 className={`TITLEINFOBOX `}>{title}</h4>
            <h2 className={`VALUEINFOBOX' ${getClass(value)}`}>{value}</h2>
            
        </div>

    )
    
}