import React from 'react'
import Card from './Card'

function App() {

    const src = [
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
        "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
    ]

    return (

        <div>
            <h1>My Contacts</h1>
            <Card
                name="Beyonce"
                number="+123 456 789"
                email="b@beyonce.com"
                src={src[0]}

            />
            <Card
                name="Jack Bauer"
                number="+987 654 321"
                email="jack@nowhere.com"
                src={src[1]}

            />
            <Card
                name="Chuck Norris"
                number="+918 372 574"
                email="gmail@chucknorris.com"
                src={src[2]} />
        </div>
    )
}

export default App