import React from 'react'

export default function Character({head, middle, pants}) {
    return (
        <section style={{display: 'flex', flexDirection: 'column'}}>
            <article 
            className='head'
            style={{
            
               background: 'beige',
               border:'brown solid 2px',
               borderRadius:'2rem',
               wiidth: '200px',
               height: '200px',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               margin: '2rem',
            }}
            >Head</article>

            <article 
            className='middle'
            style={{
                background: 'tan',
                border:'brown solid 2px',
                borderRadius:'2rem',
                wiidth: '200px',
                height: '200px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                margin: '2rem',
            }}
            >middle</article>

            <article 
            className='pants'
            style={{
                background: ' rgb(85, 57, 57)',
                border:'brown solid 2px',
                borderRadius:'2rem',
                wiidth: '200px',
                height: '200px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                margin: '2rem',
            }}
            >pants</article>
        </section>
    )
}
