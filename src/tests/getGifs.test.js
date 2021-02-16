import React from 'react'
import { getGifs } from '../helpers/getGifs'

describe('Pruebas con getGif Fetch', () => {

    test('Debe de traer 10 elementos', async() => {

        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 10 );

    });
});