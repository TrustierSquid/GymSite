import { useState } from "react"

export default function Hero() {
    return(
        <>
            <main id="hero">
                <div id="hero-group">
                    <h1 className="hero-item">VISIT OUR CLUBS,</h1>
                    <h1 className="hero-item">START YOUR FITTNESS JOURNEY,</h1>
                    <h1 className="hero-item">BECOME A MEMBER</h1>
                    <h1 style={{color: 'var(--accentColor)'}} className="hero-item">TODAY!</h1>
                    <p>Try WeightWorld for free and receive a free workout plan with a 30 minute FREE training session on us! Ready to give it a try?</p>
                    <button id="hero-btn">JOIN NOW</button>
                </div>
                <img src="src/img/workingout1.png" alt="" />
                <div>
                </div>
            </main>
        </>
    )
}