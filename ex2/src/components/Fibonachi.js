import React , {useMemo , useState} from 'react';

function Fibonachi() {
    const [count, setCount] = useState(1);
    const [value , setvalue] = useState('');
    const [theme , settheme] = useState('light');

    // Create computationally expensive function:
    const fibonacci = (num) => {
        if(num === 1){
            return [0];
        }else if(num === 2){
            return [0,1];
        }else{
            let arr = [0,1]
            for (let i = 2; i < Number(num) + 1; i++)
            { 
                arr.push(arr[i - 2] + arr[i -1]) 
            } 
            return arr.join(',')
        }
    }
    
    // Memoize fibonacci function:
    let memoizedVal = useMemo(() => {
        return fibonacci(count)
    }, [count])
    
    const clickCheckNum = () => {
        setCount(value)
    }

    const handleChangeTheme = () => {
        settheme(()=>{
            return theme === 'light' ? 'dark' : 'light' ;
        })
    }

    return <div className={`${theme}fib`}>
        <input type='number' onChange={(e)=>{setvalue(e.target.value)}}/>
        <button onClick={clickCheckNum}>add</button>
        <button onClick={handleChangeTheme}>Theme</button>
        <p>{memoizedVal}</p>
    </div>;
}



export default Fibonachi;