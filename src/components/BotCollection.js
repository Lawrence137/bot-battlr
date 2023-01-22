import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faLightning, faShieldAlt } from "@fortawesome/free-solid-svg-icons";


function BotCollection({botCollection, userBots, setUserBots}) {
  //function that will add a clicked bot to the user bots army
  const addBotToArmy = (bot) => {
    setUserBots([...userBots, bot]);
  }

  //function that will remove a clicked bot from the user bots army
  const releaseBotFromArmy = (bot) => {
    setUserBots(userBots.filter(b => b.id !== bot.id));
  }

  //function that will delete a bot from the collection
  const deleteBot = (bot) => {
    // call delete api 
    setUserBots(userBots.filter(b => b.id !== bot.id));
  }

  // use divs to display all fetched bots to the collection area
 const displayBotCards = botCollection.map((bot, index) => {
    return (
      <div className="bot-card" key={bot.id} onClick={() => addBotToArmy(bot)}>
        <div className="bot-info">
          <p>ID: {bot.id}</p>
          <p>Name: {bot.name}</p>
          <p>
          <FontAwesomeIcon icon={faHeartbeat} />
            {bot.health}
        </p>
          <p>
          {/* <FontAwesomeIcon icon={faLightning} /> */}
             {bot.damage}</p>
          <p>
          <FontAwesomeIcon icon={faShieldAlt} />
            {bot.armor}</p>
          <p>Bot Class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <img src={bot.avatar_url} alt={bot.name}/>
          <p>Created at: {bot.created_at}</p>
          <p>Updated at: {bot.updated_at}</p>
        </div>
        <div className="bot-actions">
          {userBots.find(b => b.id === bot.id) ? (
            <button onClick={() => releaseBotFromArmy(bot)}>Release</button>
          ) : (
            <span onClick={() => addBotToArmy(bot)}></span>
          )}
          <span onClick={() => deleteBot(bot)}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui four column grid">
      <div className="row">
        {/* Collection of all bots */}
        {displayBotCards}
      </div>
    </div>
  );
}

export default BotCollection;
