import { useState } from "react";
function ListInput() {
    const [workInput, setWorkInput] = useState("");
    const handleChange = (e) =>{
        setWorkInput(e.tartget.value)
    }
    
    return (
        <div>
            <p>{workInput}</p>
            <input onChange={handleChange} value={workInput}/>     
        </div>
    )
}
export default ListInput;