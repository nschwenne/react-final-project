import CreatureFinderFunction from "./CreatureFinderFunction";



function CreatureFinder() {
    return (
        <div>
            <div>
                <h1 className='header'>Creature Finder</h1>
                <p className="info">Enter a creature in the field below to find some information on it!</p>
            </div>  
           <CreatureFinderFunction />
           <ul>

           </ul>
        </div>
    )
}
   
export default CreatureFinder;