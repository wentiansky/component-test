// https://on.cypress.io/api
// import { mount } from '@cypress/vue'
import Stepper from '../Stepper.vue'

const valueSelector = '[id=stepper-value]'
const buttonSelector = '[id=increment]'
// mount(Stepper, {
//   props: { max: 1 }
// })
describe('My First Test', () => {
  it('visits the app root url', () => {
    // mount(Stepper)
    cy.mount(Stepper)
    cy.get(valueSelector)
    cy.should('be.visible')
    cy.and('contain.text', '0')
    cy.get(buttonSelector).click()
    cy.get(valueSelector)
    cy.should('contain.text', '1')
  })
})
