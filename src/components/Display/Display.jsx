import React from 'react'

export default function Display ({ catchphrases }) {
    
    return (
        <>
            <p>{catchphrases}</p>
            {catchphrases.map((catchphrase) => 
            <p 
            key={catchphrase}>{catchphrase}
            </p>
            )}
        </>
    );
}
