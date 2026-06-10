import { useState, useEffect } from 'react'
import './Hints.css'

let hint1 = {
    
    text: "???",
    value: "",
    color: "white"

};
let hint2 = {
    
    text: "???",
    value: "",
    color: "white"

};
let hint3 = {
    
    text: "???",
    value: "",
    color: "white"

};
let hint4 = {
    
    text: "???",
    value: "",
    color: "white"

};
let hint5 = {
    
    text: "???",
    value: "",
    color: "white"

};
let hint6 = {
    
    text: "???",
    value: "",
    color: "white"

};
let hint7 = {
    
    text: "???",
    value: "",
    color: "white"

};

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

export default function Hints({ attempts })
{

    switch(attempts.length)
    {

        case 0:
            hint1 = {

                text: "The pokémon's primary type is",
                value: localStorage.getItem("hint1"),
                color: getTypeColor(localStorage.getItem("hint1"))

            };
            break;
        case 1:
            hint1 = {

                text: "The pokémon's primary type is",
                value: localStorage.getItem("hint1"),
                color: getTypeColor(localStorage.getItem("hint1"))

            };
            hint2 = {

                text: "The pokémon has the ability",
                value: localStorage.getItem("hint2"),
                color: "white"

            };
            break;
        case 2:
            hint1 = {

                text: "The pokémon's primary type is",
                value: localStorage.getItem("hint1"),
                color: getTypeColor(localStorage.getItem("hint1"))

            };
            hint2 = {

                text: "The pokémon has the ability",
                value: localStorage.getItem("hint2"),
                color: "white"

            };
            hint3 = {

                text: "The pokémon is from",
                value: localStorage.getItem("hint3"),
                color: getGenColor(localStorage.getItem("hint3"))

            };
            break;
        case 3:
            hint1 = {

                text: "The pokémon's primary type is",
                value: localStorage.getItem("hint1"),
                color: getTypeColor(localStorage.getItem("hint1"))

            };
            hint2 = {

                text: "The pokémon has the ability",
                value: localStorage.getItem("hint2"),
                color: "white"

            };
            hint3 = {

                text: "The pokémon is from",
                value: localStorage.getItem("hint3"),
                color: getGenColor(localStorage.getItem("hint3"))

            };
            hint4 = {

                text: "According to the pokédex, this pokémon is the",
                value: localStorage.getItem("hint4"),
                color: "white"

            };
            break;
        case 4:
            hint1 = {

                text: "The pokémon's primary type is",
                value: localStorage.getItem("hint1"),
                color: getTypeColor(localStorage.getItem("hint1"))

            };
            hint2 = {

                text: "The pokémon has the ability",
                value: localStorage.getItem("hint2"),
                color: "white"

            };
            hint3 = {

                text: "The pokémon is from",
                value: localStorage.getItem("hint3"),
                color: getGenColor(localStorage.getItem("hint3"))

            };
            hint4 = {

                text: "According to the pokédex, this pokémon is the",
                value: localStorage.getItem("hint4"),
                color: "white"

            };
            hint5 = {

                text: "The pokémon's strongest stat is its",
                value: localStorage.getItem("hint5"),
                color: getStatColor(localStorage.getItem("hint5"))

            };
            break;
        case 5:

            hint1 = {

                text: "The pokémon's primary type is",
                value: localStorage.getItem("hint1"),
                color: getTypeColor(localStorage.getItem("hint1"))

            };
            hint2 = {

                text: "The pokémon has the ability",
                value: localStorage.getItem("hint2"),
                color: "white"

            };
            hint3 = {

                text: "The pokémon is from",
                value: localStorage.getItem("hint3"),
                color: getGenColor(localStorage.getItem("hint3"))

            };
            hint4 = {

                text: "According to the pokédex, this pokémon is the",
                value: localStorage.getItem("hint4"),
                color: "white"

            };
            hint5 = {

                text: "The pokémon's strongest stat is its",
                value: localStorage.getItem("hint5"),
                color: getStatColor(localStorage.getItem("hint5"))

            };

            if(localStorage.getItem("hint6") == "null")
            {

                hint6 = {

                    text: "The pokémon is a",
                    value: "FIRST STAGE EVOLUTION",
                    color: "rgb(240, 127, 51)"

                };

            }
            else
            {

                hint6 = {

                    text: "The pokémon has",
                    value: "ALREADY EVOLVED at least ONCE",
                    color: "rgb(51, 240, 136)"

                };

            }
            
            break;
        case 6:

            hint1 = {

                text: "The pokémon's primary type is",
                value: localStorage.getItem("hint1"),
                color: getTypeColor(localStorage.getItem("hint1"))

            };
            hint2 = {

                text: "The pokémon has the ability",
                value: localStorage.getItem("hint2"),
                color: "white"

            };
            hint3 = {

                text: "The pokémon is from",
                value: localStorage.getItem("hint3"),
                color: getGenColor(localStorage.getItem("hint3"))

            };
            hint4 = {

                text: "According to the pokédex, this pokémon is the",
                value: localStorage.getItem("hint4"),
                color: "white"

            };
            hint5 = {

                text: "The pokémon's strongest stat is its",
                value: localStorage.getItem("hint5"),
                color: getStatColor(localStorage.getItem("hint5"))

            };

            if(localStorage.getItem("hint6") == "null")
            {

                hint6 = {

                    text: "The pokémon is a",
                    value: "FIRST STAGE EVOLUTION",
                    color: "rgb(240, 127, 51)"

                };

            }
            else
            {

                hint6 = {

                    text: "The pokémon has",
                    value: "ALREADY EVOLVED at least ONCE",
                    color: "rgb(51, 240, 136)"

                };

            }

            if(localStorage.getItem("hint7") == "null")
            {

                hint7 = {

                    text: "The pokémon doesn't have a",
                    value: "secondary type",
                    color: "rgb(155, 155, 155)"

                };

            }
            else
            {

                hint7 = {

                    text: "The pokémon's secondary type is",
                    value: localStorage.getItem("hint7").toString(),
                    color: getTypeColor(localStorage.getItem("hint7"))

                };

            }
        break;

    }

    return(

        <div className = "HINTSCONTAINER">

            <h3>HINTS GIVEN</h3>

            <p>

                {hint1.text}{' '}
                <span className='bold-text' style= {{ color: hint1.color }}>
                    {hint1.value}
                </span>

            </p>
            <p>

                {hint2.text}{' '}
                <span className='bold-text' style= {{ color: hint2.color }}>
                    {hint2.value}
                </span>

            </p>
            <p>

                {hint3.text}{' '}
                <span className='bold-text' style= {{ color: hint3.color }}>
                    {hint3.value}
                </span>

            </p>
            <p>

                {hint4.text}{' '}
                <span className='bold-text' style= {{ color: hint4.color }}>
                    {hint4.value}
                </span>

            </p>
            <p>

                {hint5.text}{' '}
                <span className='bold-text' style= {{ color: hint5.color }}>
                    {hint5.value}
                </span>

            </p>
            <p>

                {hint6.text}{' '}
                <span className='bold-text' style= {{ color: hint6.color }}>
                    {hint6.value}
                </span>

            </p>
            <p>

                {hint7.text}{' '}
                <span className='bold-text' style= {{ color: hint7.color }}>
                    {hint7.value}
                </span>

            </p>


        </div>

    );

}