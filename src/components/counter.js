import React, { useState } from 'react'
import Text from './text'
import Button from './button'

const Counter = () => {
    let [count, setCount] = useState(0);

    return(
        <div>
            <Text value={"Counter App"} 
                style={{ fontSize: '24px', fontWeight: 'bold' }}
            />
            <Text value={`Value of counter is ${count}`} 
                style={{ fontSize: '24px', fontWeight: 'bold' }}
            />
            <Button value={'Increament'} onClick={ () => setCount(count++) } />
            <Button value={'Decreament'} onClick={ () => setCount(count--) } />
        </div>
    )
}
export default Counter;