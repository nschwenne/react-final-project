import React, { useState} from "react";
import CreatedCreature from "./CreatedCreature";



function CreatureCreator() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [cr, setCr] = useState("");
    const [hp, setHp] = useState("");
    const [alignment, setAlignment] = useState("");
    const [creatures, setCreatures] = useState([]);


    


    function handleSubmit(e) {
        e.preventDefault();
        setCreatures([...creatures, {name, type, cr, hp, alignment}]);
        setName("");
        setType("");
        setCr("");
        setHp("");
        setAlignment("");
    };
       
    
    return (
            <div>
            <h1 className='header'>Creature Creator</h1>
            <p className="info">Create your own creature!</p>
            <form id="creatureCreatorForm" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="type">Type: </label>
                    <input 
                        id="type" 
                        name="type" 
                        type="text" 
                        value={type}
                        onChange={(e) => {
                            setType(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="cr">CR: </label>
                    <input 
                        id="cr" 
                        name="cr" 
                        type="text" 
                        value={cr}
                        onChange={(e) => {
                            setCr(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="hp">HP: </label>
                    <input 
                        id="hp" 
                        name="hp" 
                        type="text" 
                        value={hp}
                        onChange={(e) => {
                            setHp(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="alignment">Alignment: </label>
                    <input 
                        id="alignment" 
                        name="alignment" 
                        type="text" 
                        value={alignment}
                        onChange={(e) => {
                            setAlignment(e.target.value);
                        }}
                    />
                </div>

                <input id="submitbutton" type='submit' value="Create Creature!"/>
            </form>

            <CreatedCreature creatures={creatures} />

        </div>
    )
}
export default CreatureCreator;