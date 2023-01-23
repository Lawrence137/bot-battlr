import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotSpecs({ bot, userBots, setUserBots }) {
  function viewDetailsOnClick(){
    let clickedBot = {
      "id": `${bot.id}`,
      "name": `${bot.name}`,
      "health": `${bot.health}`,
      "damage": `${bot.damage}`,
      "armor": `${bot.armor}`,
      "bot_class": `${bot.bot_class}`,
      "catchphrase": `${bot.catchphrase}`,
      "avatar_url": `${bot.avatar_url}`
    }
    setUserBots(([...userBots, clickedBot]))
    // console.log to confirm if state is updated
    // console.log(userBots)    
  }
  return (
    <div className="">
      <div className="">
        <div className="row">
          <div className="">
            <img
              alt="oh no!"
              className=""
              src={bot.avatar_url}
            />
          </div>
          <div className="">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class}
              <i className={botTypeClasses[bot.bot_class]} />
            </strong>
            <br />
            <div className="">
              <div className="">
                <div className="">
                  <div className="">
                    <i className="" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="">
                    <i className="" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="">
                    <i className="" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className=""
              onClick={() =>
                console.log("connect this to a function that shows all bots")
              }
            >
              Go Back
            </button>
            <button
              className=""
              onClick={() => viewDetailsOnClick() }
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
