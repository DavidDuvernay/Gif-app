import React from 'react';
import { AddCategory } from '../components/AddCategory';
const { shallow } = require("enzyme");
import '@testing-library/jest-dom';

describe('Pruebas en el componente', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( < AddCategory setCategories = { setCategories }/> );
    })
    
    test('Debe de mostrar el componente correctamente', () => {
    
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe simular cambio en la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change', { target: { value: value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );

    });

    test('No debe de postear la informacion onSubmit', () => {

        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        expect( setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar setCategories y limpiar el campo de texto', () => {

        const value = 'Hola Mundo';

        wrapper.find('input').simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( wrapper.find('input').prop('value')).toBe('');
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories).toHaveBeenCalledTimes(1);
        expect( setCategories).toHaveBeenCalledWith( expect.any( Function) );
    });
});