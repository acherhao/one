import {fetch} from 'react-fetch';


export const navBar_action = ()=>({
  
    payload:new Promise(resolve=>{
        let url = "/one";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
           
            
        })
    })
})
