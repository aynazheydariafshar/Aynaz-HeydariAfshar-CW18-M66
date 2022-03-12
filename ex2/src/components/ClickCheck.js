import React ,{useMemo , useState} from 'react';

function ClickCheck() {
    const [count, setCount] = useState(0);
    const [value , setvalue] = useState('');

    const handleClickmemo = useMemo(() => {
        console.log('inside')
        return count
    } , [count]);

    const handleClick = () => {
        setCount(count + 1)
    }

    return <div>
        <input type='text' onChange={(e)=>setvalue(e.target.value)}/>
        <button onClick={handleClick}>click here</button>
        <p><span>{count}</span> clicked</p>
        <p><span> {handleClickmemo} </span> is your value </p>
    </div>;
}

export default ClickCheck;


