import axios from "axios";
import React, { useState, useEffect } from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function UserBots({ bot, userBots, setUserBots, index}) {
    // state to keep track of whether a bot is selected or not
    const [isSelected, setIsSelected] = useState(false);

    // useEffect hook to check if the bot is already in the user's army
    useEffect(() => {
        const botExist = userBots.find((b) => b.id === bot.id);
        setIsSelected(!!botExist);
    }, [userBots, bot]);

    function addRemoveUserBot() {
        if (!isSelected) {
            setUserBots([...userBots, bot]);
        } else {
            setUserBots(userBots.filter(b => b.id !== bot.id));
        }
    }


  function DischargeBot(id=`${bot.id}`){
      console.log(id);
      axios
      .delete(`http://localhost:8002/bots/${id}`)
      .then(alert("bot deleted"))        
  }

return (
  <div className="">
    <div
      className=""
      key={`bot-${index}`}
    >
      <div className="image">
        <img alt="oh no!" src={bot.avatar_url} onClick={addRemoveUserBot}/>
      </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="" />
            {bot.health}
          </span>

          <span>
            <i className="" />
            {bot.damage}
          </span>
          <span>
            <i className="" />
            {bot.armor}
          </span>
          <span>
            <div className="">
              <button
                className=""
                onClick={() => {DischargeBot()} }
              >
                X
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserBots;
