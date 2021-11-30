import React, { useState } from 'react'

export const Picker = ({  
    onHeadChange,
    onMiddleChange,
    onPantsChange,
    newCatchphrase,
    setCatchphrase,
    handleClick
}) =>

{  
    const [head, setHead] = useState('alien');
    const [middle, setMiddle] = useState('fancy');
    const [pants, setPants] = useState('mane');

    const headPics = ['alien', 'fish', 'hooman'];
    const middlePics=['cool', 'fancy', 'hooman'];
    const pantsPics=['bread', 'dawg', 'mane'];

    return (
        <div>
            <label>
                Head
                <select value={head} onChange={(e) => onHeadChange(e.target.value)}>{headPics.map((pic)=>(
                    <option key={pic}>{pic}</option>
                ))}</select>
            </label>

            <label>
                Middle
                <select value={middle} onChange={(e) => onMiddleChange(e.target.value)}>{middlePics.map((pic)=>(
                    <option key={pic}>{pic}</option>
                ))}</select>
            </label>

            <label>
                Pants
                <select value={pants} onChange={(e) => onPantsChange(e.target.value)}>{pantsPics.map((pic)=>(
                    <option key={pic}>{pic}</option>
                ))}</select>
            </label>
        </div>
    )
}
