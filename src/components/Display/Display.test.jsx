/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import Display from './Display';

it('Displays a catchphrase', () => {
    render(
        <Display catchphrases={['hello', 'dude']} />
    )
    
})