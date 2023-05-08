/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import { dayjs } from 'dayjs'

describe('Iodine Careers:', function(){

    const todaysDate = dayjs().format("MM-DD-YYYY")
    const desiredStartDate = todaysDate.add(7,'day')
    const jobApplicantEmail = faker.internet.email()
    const jobApplicant = require('../fixtures/jobApplicant.json')

    beforeEach(function() {
        cy.visit('/careers-2/')
    })

    it('should validate mondatory fields are required to a successful job app submission', function() {
        cy.getPayCorElement(jobApplicant.role).click()
        cy.getPayCorContinueSubmitBtn("applyBtn").click()
        cy.getPayCorContinueSubmitBtn("continueBtn").click()
        cy.getPayCorElementContains('[for="male"]', 'Male').check().should('be.checked')
        cy.getPayCorElement2('#race-3').check('radio-button').should('be.checked')
        cy.getPayCorContinueSubmitBtn("continueBtn").click()
        cy.getPayCorElement2('#not-identify').check('radio-button').should('be.checked')
        cy.getPayCorElement("continueBtn").click()
        cy.getPayCorElementContains('[type="radio"]', 'No, I Don\'t Have A Disability').check().should('be.checked')
        cy.getPayCorElement("yourName").type(jobApplicant.fullName).should('have.text', jobApplicant.fullName)
        cy.getPayCorElement('todayDate').type(todaysDate)
        cy.getPayCorElement("continueBtn").click()
        cy.getPayCorElement("firstNameField").type(jobApplicant.firstName).should('have.value', jobApplicant.firstName)
        cy.getPayCorElement("lastNameField").type(jobApplicant.lastName).should('have.value', jobApplicant.lastName)
        cy.getPayCorElement2("#mobile").type(jobApplicant.mobilePhone).should('have.value', jobApplicant.mobilePhone)
        cy.getPayCorElement("#address1").type(jobApplicant.address).should('have.value', jobApplicant.address)
        cy.getPayCorElement("#city").type(jobApplicant.city).should('have.value', jobApplicant.city)
        cy.getPayCorElement("#state").select(jobApplicant.state).should('have.value', jobApplicant.state)
        cy.getPayCorElement2('[title="Amount"]').type(jobApplicant.desiredCompAmount).should('have.value', jobApplicant.desiredCompAmount)
        cy.getPayCorElement('[title="Desired Start Date"]').type(desiredStartDate)
        cy.getPayCorElement("#gnewton_section_60_question_10_answer").select('No').should('have.value', 'No')
        cy.getPayCorElement("#gnewotn_input_29").check().should('be.checked')
        cy.getPayCorElement2('[title="Signature"]').type(jobApplicant.fullName).should('have.value', jobApplicant.fullName)
        cy.getPayCorElement('ccpaAgreeCheckbox').check().should('be.checked')
        cy.getPayCorElementContains('#submitText', 'Submit').click({force: true})
        cy.getPayCorElement("emailField").invoke("prop", "validationMessage").should("equal", 'Please fill out this field.');
    })
})