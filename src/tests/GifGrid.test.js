import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../components/GifGrid';
import { useFetchGifs } from '../hooks/useFetchGifs';
import '@testing-library/jest-dom';

jest.mock('../hooks/useFetchGifs');

describe('Pruebas en el componente', () => {
    const category= 'One Punch';

    test('Debe mostrar el componente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category = { category } />);
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imagenes de useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/urldePrueba',
            title: 'Titulo de prueba',
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category = { category } />);

        expect( wrapper.find('p').exists()).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
    });
});