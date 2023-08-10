import React from "react";

export const Arjun = ()=>{
    const handle =(e)=>{
        if(e.target.value){
            console.log(e.target.value)
        }

    }
    return(
        <>

        <input type="checkbox" value='one' onChange={handle}/>
        </>
    )
}