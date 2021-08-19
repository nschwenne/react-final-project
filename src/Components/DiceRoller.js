
function DiceRoller( {id,x} ) {
   function roll () { 
          const newValue= Math.floor((Math.random() * x )+1)
           document.getElementById(`${id}`).innerHTML = newValue
      }
   return (
       <div className='buttonRoller'>
              <p id={id} className="placeholder">
                     
              </p>
              <button onClick={roll}>Roll {id}</button>
              
       </div>
       )
       
}

export default DiceRoller;