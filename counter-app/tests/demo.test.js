describe('Pruebas en <DemoComponent />', () => {
  test('Esta prueba no debe fallar', () => { 
    let variable1 = 'hola'
    let variable2 = 'hola'

    expect( variable1 ).toBe( variable2 )
  })
})