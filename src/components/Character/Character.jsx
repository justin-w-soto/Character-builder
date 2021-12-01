import React from 'react'

export default function Character({head, middle, pants}) {
    return (
        <section style={{display: 'flex', flexDirection: 'column'}}>
            <article 
            className='head'
            style={{
               background: 'beige',
               border:'tomato solid 2px',
               wiidth: '200px',
               height: '200px',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
            }}
            ></article>

            <article 
            className='middle'
            style={{
                background: 'tan',
                border:'tomato solid 2px',
                wiidth: '200px',
                height: '200px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            ></article>

            <article 
            className='pants'
            style={{
                background: 'brown',
                border:'tomato solid 2px',
                wiidth: '200px',
                height: '200px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            ></article>
        </section>
    )
}
