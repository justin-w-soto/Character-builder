import React, { useState } from 'react'



export const Picker = ({  onHeadChange}) =>

{  
    const [head, setHead] = useState('');
    return (
        <div>
            <label>
                Head
                <select value={head} onChange={(e) => onHeadChange(e.target.value)}></select>
            </label>
        </div>
    )
}
