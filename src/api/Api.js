import React, { useEffect, useState } from 'react'

 const Api =(url)=> {
 const [state,setState] = useState([]);
    useEffect(()=>{
           fetch(url)
         .then(res=>res.json())
         .then(data=>{
            setState(data);
         })
         .catch(err=>{
            
         })
   }, [])
   return state;
}

export default Api;
