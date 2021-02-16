const { useFetchGifs } = require("../hooks/useFetchGifs");
const { renderHook } = require("@testing-library/react-hooks");


describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe de retornar el estado inicial',() => {

        const { result } = renderHook( () => useFetchGifs( 'One Punch' ) )
        const { data, loading } = result.current;

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );

    });
});