import React from "react";

function CreatedCreature(props) {

    function addCreatureToList(creature) {
        fetch("http://localhost:3000/creatures", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ name: creature.name, type: creature.type, cr: creature.cr, hp: creature.hp, alignment: creature.alignment  })
        })
    }
        
    
    const creatureList = props.creatures.map((creature, i) => {
        return (
        <li id={creature.name} key={i}> 
        Name: {creature.name}
        <br></br>
        Type: {creature.type}
        <br></br>
        CR: {creature.cr}
        <br></br>
        HP: {creature.hp}
        <br></br>
        Alignment: {creature.alignment}
        <br></br>
      <button onClick={() => {
          addCreatureToList(creature)
      }}>Add to creature list</button>
        </li>
        );
    });


    return (
    <div>
        <div>
            <h1 id="creatureListSubHead">Your Creatures</h1>
            <br></br>
            <p></p>
            <ul id='creatureList'>
                {creatureList}
            </ul>
        </div>
        <div>
            
        </div>
    </div>
    )
}


export default CreatedCreature;