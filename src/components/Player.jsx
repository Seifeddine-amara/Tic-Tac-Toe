import React from 'react'
import { useState } from 'react'

function Player({name,symbol,isActive,onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    console.log(isEditing);

    function handleEditSave(){ 
            setIsEditing((editing) => !editing );
            if (isEditing){
                onChangeName(symbol , playerName);
            }   
    }

    function handleNameChange(event){
        setPlayerName(event.target.value);
    }
        
  return (
    
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {isEditing ? (
                                <input 
                                    placeholder={playerName}
                                    onChange={handleNameChange}
                                    value={playerName} 
                                    required
                                />
                            ) : (
                                    <span className='player-name'>{playerName}</span>
                )}
                <span className='palyer-symbol'>{symbol}</span>
            </span> 
            <button onClick={handleEditSave} id='button-Edit-Save'>
                {isEditing ? "Save" : "Edit"}
            </button>

        </li>
    
  )
}

export default Player
