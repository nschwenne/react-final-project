import React, { useState } from "react"

function CreatureFinderFunction(props) {
  const [creatureInfo, setCreatureInfo] = useState([]); 
  const [creatureName, setCreatureName] = useState('');

  function addCreatureToList(creature) {
    fetch("http://localhost:3000/creatures", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ name: creature.name, type: creature.type, cr: creature.challenge_rating, hp: creature.hit_points, alignment: creature.alignment  })
    })
}

  function lowerCase(inputData) {
    return inputData.toLowerCase();
  }
  function addDash(inputData) {
    return inputData.split(" ").join('-')
  }

  function fetchData(creatureName) {
    fetch(`https://api.open5e.com/monsters/${creatureName}/`)
    .then((res) => res.json())
    .then((json) => {
      if(creatureName === json.slug) {
      setCreatureInfo(json)
    } else {
      window.alert("Creature does not exist, try again")
    }
  })
  }
 
  function HandleSubmit(e) {
    e.preventDefault();
    const firstEdit = lowerCase(creatureName);
    const secondEdit = addDash(firstEdit);
    fetchData(secondEdit);
    setCreatureName("");
  }
 
  return (
    <div>
      <div>
        <form id="creatureFinderForm" onSubmit={HandleSubmit}>
         <label htmlFor="creatureName">Creature Name: </label>
          <input 
            id="creatureName"
            name="name" 
            type="text" 
            value={creatureName} 
            onChange={(e) => {
            setCreatureName(e.target.value);
        }}/>
          <span>&nbsp;&nbsp;</span>
          <input type="submit" name="findCreature" value="Find Creature!" />
        </form>
      </div>
      <div>
      <ul id='creatureList'>
        <li id={creatureInfo.name}> 
        <br></br>
        Name: {creatureInfo.name}
        <br></br>
        Type: {creatureInfo.type}
        <br></br>
        CR: {creatureInfo.challenge_rating}
        <br></br>
        HP: {creatureInfo.hit_points}
        <br></br>
        Alignment: {creatureInfo.alignment}
        <br></br>
        <button onClick={() => {
          addCreatureToList(creatureInfo)}}>Add to Creature List</button>
        </li>
     </ul>
      </div>
    </div>
  )
}

export default CreatureFinderFunction;

