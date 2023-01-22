import React from "react";
import UserBots from "./UserBots";

function YourBotArmy({myBots, userBots, setUserBots}) {
  // create a reacts element array to render all user selected bots
  if(myBots){
  const displayUserBotSpecs = myBots.map((bot, index) => {
    // return <BotSpecs key={bot.id} bot={bot}/>
    return <UserBots key={`bot-${index}`} bot={bot} userBots={userBots} setUserBots={setUserBots}/>
  })
  return (
    <div className="bot-army">
      <div className="">
        <div className="display bots">
          {/* render these user bots here */}
          { displayUserBotSpecs }
        </div>
      </div>
    </div>
  );
}else{
  return(
    <p>Select a bot to add it to your collection</p>
  )
}

}

export default YourBotArmy;
