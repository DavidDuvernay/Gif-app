import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';

describe('Prueba de GIfGridItem para mostrar componente', () => {

    const title = 'Titulo de prueba';
    const url = 'https//localhost/imagenDePrueba.jpg';
    const wrapper = shallow( <GifGridItem title= { title } url = { url }/> );
    
    test('Debe mostrar componente', () =>{


        expect(wrapper).toMatchSnapshot();
    });

    test('Debde de tener un parrafo con title', () => {
        
        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );
    });

    test('Debe tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('Debe incluid la clase animate__fadeInLeft', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeInLeft') ).toBe( true );

    });
    
});