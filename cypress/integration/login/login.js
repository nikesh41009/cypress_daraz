// / <reference types="cypress" />
import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import login from "../POM/login_pom"
const log = new login()

beforeEach(function () { // "this" points at the test context object
    cy.fixture('example').then((user) => { // "this" is still the test context object
        this.user = user
    })
})

Given("I visit Daraz's Nepal login page", function () {
    cy.visit('/')
    cy.get('#anonLogin').click()
})

When('I click on login button after I provide empty input data', function () {
    cy.get("[type='submit']").click()
    log.empty_field('2')
})

And('I type a valid email and invalid password', function () {
    const password = this.user.invalid_password
    let email_address = cy.faker.internet.email()
    log.email(email_address)
    let a = 0
    password.forEach((url => {
        var text = url;
        log.password(text)
        cy.get("[type='submit']").click()
        a = a + 1
        if (a <= 5) {
            log.error_message('Incorrect username or password.')
        } else {
            log.error_message('Your login has failed too many times, please retry after an hour.')
        }
    }))
})

And('I type an invalid email and valid password', function () {
    const email = this.user.invalid_email
    const password = this.user.valid_password
    email.forEach((url => {
        var text = url;
        log.email(text)
        log.password(password)
        if (text == "defgh@domain.com" || text == "@susan.com") {
            cy.get("[type='submit']").click()
            log.error_message('Incorrect username or password.')
        } else {
            log.email_validation_message()
        }
    }))
})

Then('I type valid email address and valid password', function () {

    const email = this.user.valid_email
    const password = this.user.valid_password
    const username = this.user.username
    let i=0
    email.forEach((url => {
        var text = url;
        log.email(text)
        log.password(password)
        cy.get("[type='submit']").click()
        log.login_validation(`${username[i]}'s account`)
        i=i +1
        cy.clearCookies()
        cy.visit('/')
        cy.get('#anonLogin').click()
    }))
})
