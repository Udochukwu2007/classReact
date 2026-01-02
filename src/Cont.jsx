import React from "react"
import Wel from "./Wel"
function Cont() {

    let coco =()=> alert('hii')
    return(
        
        <div className="box">
            <h1 className ='child'>This is a Container Component</h1>
          
          <Wel name="John" pot={coco}/>
          
        </div>
       
    )
}

export default Cont























