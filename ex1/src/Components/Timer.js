import React , {useState , useEffect} from 'react'

function Timer() {
    let [time , settime] = useState(new Date())
    let [colors , setcolors] = useState('')


    const setTimeHandle = () => {
        settime(new Date())
    }

    useEffect(() => {
        let interval = setInterval(()=>
        {
            setTimeHandle()
            let randomColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
            setcolors(randomColor)
        }
        ,1000)
        return() => clearInterval(interval)
    }, [])


    return (
        <div>
            <h1 style={{color : colors}}>{time.toLocaleTimeString()}</h1>
        </div>
    )
}


export default Timer;