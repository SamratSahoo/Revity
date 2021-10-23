import React from 'react'
import './Body.css'

const Body = () => {
    return (
        <div class="home">
            <div class="container">
                <div class="home-wrapper d-flex">
                    <div class="col-left">
                        <h1>Affordability <br />
                            At Your Fingertips</h1>
                        <p>Revity shows you the closest hospitals nearby with crowdfunded surgery prices across various insurance providers, optimizing your time and maximizing savings in times of crisis.</p>
                        <ul>
                        </ul>
                        <div class="btn-section d-flex">
                            <a href="/login" class="btn-start">Get started</a>
                        </div>
                    </div>
                    <div class="home-image">
                        <img src="map.svg" alt="home image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
