import React, { useState, useEffect } from 'react';

const BotCollection = (props) => {
    const [selectedBots, setSelectedBots] = useState([]);
    const [bots, setBots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8001/bots')
            .then(response => response.json())
            .then(data => setBots(data))
    }, [])

    const handleAddBot = (bot) => {
        if (!selectedBots.includes(bot)) {
            setSelectedBots([...selectedBots, bot]);
        }
    }

    return (
        <div>
            <h2>Available Bots:</h2>
            <ul>
                {bots.map((bot, index) => (
                    <li key={index}>
                        <div>Name: {bot.name}</div>
                        <div>Type: {bot.type}</div>
                        <button onClick={() => handleAddBot(bot)}>Add to Army</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BotCollection;
