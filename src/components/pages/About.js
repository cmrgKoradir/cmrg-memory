import React from 'react'

const About = () => (
    <>
        <div style={containerStyle}>
            <h1>About</h1>
            <p>This is a simple memory game meant as an exercise to get familiar with JavaScript, React and PWAs.</p>
            <p>It will crawl <a href="https://www.comerge.net/team">the Comerge Team Page</a> for updates when it's online
            and use the profiles there to populate the cards with.</p>
        </div>
    </>
);

const containerStyle = {
    padding: '1em'
}

export default About