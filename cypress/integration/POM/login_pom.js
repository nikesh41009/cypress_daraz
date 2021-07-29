class login {

    email(email) {
        cy.get("[placeholder='Please enter your Phone Number or Email']").clear().type(email)
    }
    password(password) {
        cy.get("[placeholder='Please enter your password']").clear().type(password)
    }
    empty_field(n) {
        cy.get('.error').should('include.text', "You can't leave this empty.").and('have.length', n)
    }
    email_validation_message() {
        cy.xpath("//span[contains(text(),'The length of the Phone or Email should be 6-60 ch')]")
        .should('have.text', 'The length of the Phone or Email should be 6-60 characters.')
    }
    error_message(content) {
        cy.get('.next-feedback-title').should('have.text', 'Error')
        cy.get('.next-feedback-content').should('have.text', content)
    }
    login_validation(username) {
        cy.intercept({method: 'GET', url: '/user/api/getUser'}).as('user')
        cy.wait('@user').its('response.statusCode').should('eq', 200)
        cy.get('#myAccountTrigger').should('be.visible').invoke('text').then(text => {
            let a = text
            expect(a).to.equal(username)
        })
    }
}
export default login
