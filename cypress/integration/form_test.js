// advancedFormManagement.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('My First Test', () => {

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const termsCheckbox = () => cy.get('input[name="terms"]')

    beforeEach(()=> {
        cy.visit('http://localhost:3000/')
    })

    it('Retrieves name and recieves input', () => {
      nameInput().type('Fred')
      nameInput().should('have.value', 'Fred')
    })

    it('Retrieves email and recieves input', () => {
        emailInput().type('fred@gmail.com')
        emailInput().should('have.value', 'fred@gmail.com')
      })
    
    it('Retrieves password and recieves input', () => {
        passwordInput().type('12345')
        passwordInput().should('have.value', '12345')
    })

    it('Checks checkbox', () => {
        termsCheckbox().check()
    })

    describe('Submit form data', () => {
        it('Submit Button', () => {
            cy.get('button').should('be.disabled')
            nameInput().type('Name')
            emailInput().type('Email@email.com')            
            passwordInput().type('qwertyuio')
            cy.get('select').select('Noob')
            cy.get('input[name="gender"]').check('Male')
            termsCheckbox().check()
            cy.get('button').should('be.enabled')
        })
    })

    describe('Check for form validation', () => {
        it('Email', () => {
            emailInput().type('rika')
            cy.get('#emailError')
            .should('have.text', 'Must enter a valid email')
        })

        it('Password', () => {
            passwordInput().type('rika')
            cy.get('#passwordError')
            .should('have.text', 'Password is too short - should be 8 chars minimum.')
        })
    })

  })

//   Get the Name input and type a name in it.
//   Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
//   Get the Email input and type an email address in it
//   Get the password input and type a password in it
//   Set up a test that will check to see if a user can check the terms of service box

//   Check to see if a user can submit the form data
//   Check for form validation if an input is left empty