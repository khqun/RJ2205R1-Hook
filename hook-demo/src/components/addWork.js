import { useState } from "react";
function ListInput() {
    const [name, setName] = useState();
    const [todo, setTodo] = useState([]);
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const submit = () => {
        const newList = todo;
        newList.push(name);
        setTodo(newList);
        setName("")
    }
    return (
        <div>
            <input onChange={handleChange} value={name} />
            <button onClick={submit}>add</button>
            <div>
            {todo.map((name,index)=>{
                return (
                    <p key={index}>{name}</p>
                )
            })}
            </div>
        </div>
    )
}
export default ListInput;