import React from 'react'

export default function Character({head, middle, pants}) {
    return (
        <section style={{display: 'flex', flexDirection: 'column'}}>
            <article 
            aria-label='Head'
            className='head'
            style={{
            
                backgroundImage: `url(./${head}-head.jpg)`,
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
            aria-label='Middle'
            className='middle'
            style={{
                backgroundImage: `url(./${middle}-middle.jpg)`,
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
            aria-label='Pants'
            className='pants'
            style={{
                backgroundImage: `url(./${pants}-pants.jpg)`,
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
