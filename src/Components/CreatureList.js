import React, { useState, useEffect } from "react";


function CreatureList() {
    const [creatureList, setCreatureList] = useState([]);

    function deleteFunction(creature) {
        fetch(("http://localhost:3000/creatures/" + creature.id) , 
        {
        method: "DELETE"
        })
        alert("Please reload page")
     }

    useEffect (() => {
        fetch("http://localhost:3000/creatures")
        .then((response) => response.json())
        .then((json) => {
            setCreatureList(json);
        })
    }, [])

    return (
        <div>
            <h1 className="header">Creature List</h1>
            <ul id='creatureList'>
                {creatureList.map(creatureList => 
                <li id={creatureList.name}> 
                
                Name: {creatureList.name}
                <br></br>
                Type: {creatureList.type}
                <br></br>
                CR: {creatureList.cr}
                <br></br>
                HP: {creatureList.hp}
                <br></br>
                Alignment: {creatureList.alignment}
                <br></br>
                <button onClick={() => {
                     deleteFunction(creatureList)
                    }}>DELETE</button>
                   
                 </li>
                 
                )}
                
            </ul>
        </div>
    )
}

export default CreatureList;