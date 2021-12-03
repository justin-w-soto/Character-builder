import React from 'react'

export default function Character({head, middle, pants}) {
    return (
        <section style={{display: 'flex', flexDirection: 'column'}}>
            <article 
            aria-label='Head'
            className='head'
            style={{
            
                backgroundImage: `url(./${head}-head.jpg)`,
            
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                wiidth: '6em',
                height: '22em',
                backgroundRepeat: 'no-repeat',
                
            }}
            >Head</article>

            <article 
            aria-label='Middle'
            className='middle'
            style={{
                backgroundImage: `url(./${middle}-middle.jpg)`,
            
                display: 'flex',
                flexDirection: 'row',
                wiidth: '6em',
                height: '22em',
                backgroundRepeat: 'no-repeat',
                
            }}
            >middle</article>

            <article 
            aria-label='Pants'
            className='pants'
            style={{
                backgroundImage: `url(./${pants}-pants.jpg)`,
                display: 'flex',
                flexDirection: 'row',
                wiidth: '6em',
                height: '22em',
                
                backgroundRepeat: 'no-repeat',
               
            }}
            >pants</article>
        </section>
    )
}
