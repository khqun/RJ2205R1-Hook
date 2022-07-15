import './App.css';
import {useState} from 'react'
function App() {
 function useIncreasement(addAmount){
  const [count,setCount] = useState(0);
  const increase = () =>{
    setCount(count + addAmount)
  }
  return [count,increase]
 }
 const [firstCount,setFirstCount] = useIncreasement(1);
 const [secCount,setSecCount] =useIncreasement(2);
 return (
  <div>
    <div>
      <p>Count: {firstCount}</p>
      <button onClick={setFirstCount}>Add 1</button>
    </div>
    <div>
      <p>Count: {secCount}</p>
      <button onClick={setSecCount}>Add 2</button>
    </div>
  </div>
 )
}

export default App;
