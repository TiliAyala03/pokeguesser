import { useState, useEffect } from 'react'
import './StreakBox.css'

export default function StreakBox({ text, value })
{

    return(

        <div className='STREAKBOX'>

            <div className='TEXTSTREAKBOX'>
                <p>{text}</p>
            </div>
            
            <div className='VALUESTREAKBOX'>
                <h2>{value}</h2>
            </div>

        </div>

    )

}