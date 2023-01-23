import React, { useState, useEffect } from "react";
import axios from "axios";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

// create an axios instance to minimize use of baseURL
const client = axios.create(
  {
    baseURL : "https://api.jsonbin.io/v3/b/63ce47e6ebd26539d065ab8d"
  }
)

function BotsPage() {
  //state variable to store bots after fetch
  const [bots, setBots] = useState([]);
  //state variable to store user selected ots on enlisting
  const [userBots, setUserBots] = useState([]);

  //side effect to fetch and update state using axios
  useEffect(
    ()=>{
      client
        .get("/")
        .then((response)=>setBots(response.data.record.bots));
    }, []
  )

  return (
    <div>
      {/* Pass the specs parent component users bots */}
      <YourBotArmy myBots={userBots} userBots={userBots} setUserBots={setUserBots}/>
      <BotCollection botCollection={bots} userBots={userBots} setUserBots={setUserBots} />
    </div>
  )
}

export default BotsPage;
