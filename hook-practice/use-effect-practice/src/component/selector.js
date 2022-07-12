import { useState, useEffect } from 'react';
function Selector() {
    const [selected, setSelected] = useState(0);
    const [valueSeclected, setValueSelected] = useState("");
    const handler = (e) => {
        setSelected((prev)=>{
            console.log(prev);
            return e.target.value
        })
    }
    useEffect(() => {
        switch (selected) {
            case "Java":
                setValueSelected("Java");
                break;
            case "Angular":
                setValueSelected("Angular");
                break;
            case "Javascript":
                setValueSelected("Javascript");
                break;
            case "React":
                setValueSelected("React");
                break;
            default:
        }
    },)
    return (
        <div>
            Chọn khóa học:
            <br/>
            <select
            onChange={handler}>
                <option value="Java">Java</option>
                <option value="Angular">Angular</option>
                <option value="Javascript">Javascript</option>
                <option value="React">React</option>
            </select>
            <h1>Your lesson: {valueSeclected}</h1>
        </div>
    )
}
export default Selector;