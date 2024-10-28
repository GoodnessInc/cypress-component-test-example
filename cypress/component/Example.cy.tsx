import { Example } from '../../src/Example'

describe('<Example />', () => {
  it('has bold text', () => {
    cy.mount(<Example />)
		cy.contains('Example').should('have.css', 'font-weight', '700')
  })

	it("supports msg prop", () => {
		cy.mount(<Example msg='msg prop' />)
		cy.contains("msg prop")
	})
})
