import {useState , useEffect, useCallback} from 'react' ;
export function useFetch(url){
            
            const [data , setData] = useState(null)
            const [loanding, setLoanding] = useState(false);
            const [error,setError] = useState('');
            const [abortController , setAbortController] = useState(new AbortController) ;

            const load = useCallback(

            async () => {

                if(!url){
                    setError("empty url");
                    return;
                }
            setLoanding(true);
            try{
const response = await fetch(url);
            const json = await response.json();
            setData(json);
            } catch(e){
                const error = e as Error ;
                setError(error.message);
            }
            
            setLoanding(false) ;
            }
            , [url]
        );

           useEffect (
            () => {
                load();
                } , [load]
           )
    return{
        data , loanding , error

    }
            
           
         }

    
