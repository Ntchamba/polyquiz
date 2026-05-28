import {useState} from 'react' ;

/**
 * 
 * @param {onAddTask} fonction de creation d'une nouvelle tache .
 * @returns un formulaire de remplissage .
 */

export function Login (){
const [name , setName] = useState("");
function handleName (e){
       setName(e.target.value) ;
}

      
    return(
        <form  className = 'relative top-500 flex  flex-col bg-blue  text-center' onSubmit={(e) =>{
                e.preventDefault();
            setName("");
            }}>
              <div className='relative top-500'>
                      <label htmlFor = "id-titre">Player name :</label>
                      <input value={name} type="text" placeholder="Player name" id = "id-titre" onChange={handleName}></input>
              </div>
            
            <button type='submit' className='bg-green' >sign in</button>
            
        </form>
    )
}