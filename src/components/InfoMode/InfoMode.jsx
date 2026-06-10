import { useState, useEffect } from 'react'
import './InfoMode.css'

export default function InfoMode()
{

    return(

        <div className='MAININFO'>

            <h4 className='dateHeader'>May 30th, 2026</h4>

            <p>
                Hello, everyone! This update took longer than expected, but it's finally here! PokéGuesser has migrated
                to a whole new environment, and has been rebuilt from scratch to improve its general performance! Besides some few
                minor aesthetic changes, you should only note faster loading times and a general decrease in intrusive ads
                around the site. Making money is cool and all but ultimately, the user experience is what matters the most!
                If any streak or any sort of information at all has been damaged by this whole new system, I apologize profusely,
                although that shouldn't be the case. You can expect a couple bugs here and there while the website runs in this 
                whole new framework, it's most probably bound to happen.<br/><br/>
                If there's any gamebreaking issue or any sort of concern, you're always welcome to provide your feedback at the
                PokéGuesser discord! <a href="https://discord.gg/tfRKNedugZ " target="_blank" rel="noopener noreferrer">Join by clicking here!</a>
            </p>

            <h4 className='dateHeader'>April 14th, 2026</h4>
            <h2 className='importantHeader'>IMPORTANT UPDATE: IT'LL TAKE ONLY 2 MINUTES TO READ!</h2>

            <p>
                PokéGuesser is about to turn 1 year old! Before anything, I'd like to very especially thank to everyone who keeps playing daily, or
                maybe even every other day, or every week, or every other week. As long as you keep coming back every now and then to at least play
                the minigame during a line, or during your way to school/work/home, then you make me incredibly happy and grateful. Thank you, from
                the bottom of my heart. I hope you have enjoyed and continue to enjoy this little game!
            </p>

            <p>
                The project is in a whole different level from where it was a year ago, and for that, I thank you once again. However, it is unfortunately
                a bit far still from reaching sustainability. In other words, ad revenue isn't producing as much as necessary to cover server costs and
                whatnot, and bills are starting to catch up. Like I mentioned before, this project is actually slowly but steadily growing, and I fully
                believe that it can reach a good amount of users to sustain itself eventually. If you want to help this happen sooner rather than later, 
                please do consider sharing with your friends and family if you think they'd enjoy it! There's also a donation button at the end of this 
                page, but of course, by playing and sharing you do more than enough! I will definitely keep doing my part on promoting this website as much
                as I can, so it can continue to grow and improve!
            </p>

            <p>
                It may seem that we are in a time crunch to see if the website manages to reach the internal goal of staying alive, but that doesn't mean that 
                there's anything to worry about! I haven't had my arms crossed this entire time, and I've been figuring out what to do to further improve what's 
                already here, and what to do if things end up not working. With that in mind, expect the following updates very soon:
            </p>

            <ul>

                <li>
                    Better base technology for the website: As I've been working on separate projects and improving my knowledge in general software
                    design, I can and will soon revamp the website's back and front to a more modern approach. This might be not super noticeable, but
                    it means faster loading times, and cleaner transtions between tabs. Expect it soon!
                </li>
                <li>
                    Support for more languages: I want to start working towards making PokéGuesser accessible to everyone around the world! I'll be looking
                    into how to make it so you can choose between English and Spanish, and from there, I will try to add more languages on the run!
                </li>
                <li>
                    A mobile app: This one also acts like a plan B in case the website ends up having to shut down (let's hope not!). Having the ability to receive a notification
                    whenever your 24 hrs have reset so you don't forget to guess a Pokémon per day is something I've always wanted to introduce to the app. I'm
                    excited to open up to this new side of the development too!
                </li>
                <li>
                    Finally, a bridge to interact and receive feedback directly: This part is actually already done! PokéGuesser now has a Discord Server, in which
                    you will be able to interact with other players, and debate on feedback and whatnot, if you're willing to! You can join via:   
                    <a href="https://discord.gg/tfRKNedugZ " target="_blank" rel="noopener noreferrer"> Join by clicking here!</a>.
                </li>

            </ul>

            <p>
                That's all for now! I'll do my best to keep y'all updated and deliver these improvements as soon as possible. In the meantime, have fun completing
                your Pokédex, and happy one year anniversary!
            </p>

            <h3>- - -</h3>

            <h2>ABOUT THIS GAME</h2>

            <img src = "https://img.pokemondb.net/sprites/black-white/anim/shiny/aipom.gif" className='aipom'/>

            <p>
                PokéGuesser is a fun daily game where you have to guess a Pokémon based on up to seven different hints. 
                Each time you miss to fail a guess, a new hint will be revealed to you, each one being more helpful than the previous one. 
                Everyone gets the same Pokémon each day, and there's a register of your games played, victories and even a win streak, so make 
                sure to play daily and challenge your friends!
            </p>

            <p>
                Adittionally, since it was requested a lot, there's now a challenge mode so you can play PokéGuesser more than once a day! Be
                warned though, challenge mode is very hard, and for real Pokémon knowers. It's still on beta, so it might change in the future
                if it turns out to be difficult beyond enjoyment. The rules are explained in the Challenge Mode tab, so check that out!
            </p>

            <h2>SUPPORT THE WEBSITE</h2>

            <p>
               Thanks to everyone's daily commitment to the website, PokéGuesser was labeled as eligible for ads! This means the page is slowly
               getting some revenue to keep itself up, but it's still far from possible in the long run. All I can ask from you is to allow this
               website through your ad-blocker, if you have one. It took a bit to be eligible for ads since I wanted a provider that wouldn't
               be invasive to anyone's experience. Please consider it, it'll help keep the website alive! There's also some other ways to help!
            </p>

            <p>
                The best way you can help PokéGuesser is by sharing the project with your friends. Promote it to everyone that might be interested! 
                That way, we'll reach our visit rate goal faster and we'll secure the life of the project. However, there is a second option. If you enjoy 
                the game and if you can allow it to yourself, consider donating! There's a button for you to do it easily through Ko-fi. It would be of great 
                help, and even just one dollar is way more than enough! You're not and will never be obligated to donate, so please just do it if it doesn't 
                represent a problem for you at all. Any kind of support is appreciated, thank you very very much :)
            </p>

            <h2>LEGAL DISCLAIMER</h2>

            <p>
                Pokéguesser is a fan-made project created for entertainment purposes. All Pokémon trademarks, characters, 
                and related content are the property of The Pokémon Company. This site is not affiliated with or endorsed by The Pokémon Company. 
                Data and resources are sourced from <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer">PokéAPI</a>.
            </p>

        </div>

    );

}