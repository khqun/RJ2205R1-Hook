import './App.css';
import { useState } from 'react';
function App() {
  const [selectedCar, setSelectedCar] = useState({ car: "Honda", color: "red" });
  const handlerCar = (e) => {
    setSelectedCar(prevState => {
      return { car: e.target.value, color: prevState.color }
    })
  }
  const handlerColor = (e) => {
    setSelectedCar(prevState => {
      return { car: prevState.car, color: e.target.value}
    })
  }
  return (
    <div>
      <select onChange={handlerCar}>
        <option value="Honda">Honda</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Huyndai">Huyndai</option>
        <option value="Toyota">Toyota</option>
      </select>
      <select onChange={handlerColor}>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="black">black</option>
        <option value="white">white</option>
      </select>
      <h1>Your car is: {selectedCar.color} {selectedCar.car}</h1>
    </div>
  )
}
export default App;
