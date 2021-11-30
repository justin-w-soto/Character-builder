import React from 'react'

export const Character = ({head, middle, pants}) => {
    return (
        <section style={{display: 'flex', flexDirection: 'column'}}>
            <article 
            className='head'
            style={{
                backgroundImage: `url(./${head}-head.jpg)`,
                width: 200,
                height: 200,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            ></article>

            <article 
            className='middle'
            style={{
                backgroundImage: `url(./${middle}-middle.jpg)`,
                width: 200,
                height: 200,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            ></article>

            <article 
            className='pants'
            style={{
                backgroundImage: `url(./${pants}-pants.jpg)`,
                width: 200,
                height: 200,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            ></article>
        </section>
    )
}
