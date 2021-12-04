import React from 'react'

export default function Character({head, middle, pants}) {
    return (
        <section 
        style={{
            display: 'flex', 
            flexDirection: 'column', 
            width: '300px', 
            height: '100vh', 
            textAlign: 'center', 
            alignContent: 'center',
            marginLeft: 'auto', 
            marginRight: 'auto'
           }}>
            <article 
            aria-label='Head'
            className='head'
            style={{
            
                backgroundImage: `url(./${head}-head.png)`,
                width: '200px',
                height: '200px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            >Head</article>

            <article 
            aria-label='Middle'
            className='middle'
            style={{
                backgroundImage: `url(./${middle}-middle.png)`,
                width: '200px',
                height: '200px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            >middle</article>

            <article 
            aria-label='Pants'
            className='pants'
            style={{
                backgroundImage: `url(./${pants}-pants.png)`,
                display: 'flex',
                flexDirection: 'column',
                width: '200px',
                height: '200px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            >pants</article>
        </section>
    )
}
