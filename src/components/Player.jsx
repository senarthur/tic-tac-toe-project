import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing(editing => !editing);
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
            <input onChange={(e) => handleNameChange(e)} type="text" className="player-name" defaultValue={playerName} required />
        ) : (
            <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
