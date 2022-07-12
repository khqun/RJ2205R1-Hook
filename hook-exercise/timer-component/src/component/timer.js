import { useState, useEffect } from 'react';
function Timer() {
    const [time, setTime] = useState(4);
    const [timeloop, setTimeloop] = useState();
    const stopLoop = () => {
        setTimeloop(null);
    }
    useEffect(() => {
        setTimeloop(setInterval(() => {
            setTime(time - 1)
        }, 1000)
        )
       
        return function cleanup() {
            console.log("clean");
            clearInterval(timeloop)
        }
    }, [time])
    if(time){
        return (
            <div>
                <h1>Time: {time} seconds left</h1>
            </div>
        )
    }
    else {
        stopLoop()
        return ( 
            <div>
                <h1>End</h1>
            </div>
)

    }
   
}
export default Timer;