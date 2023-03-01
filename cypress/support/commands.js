// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const Url = "https://petstore.swagger.io/v2"


Cypress.Commands.add("AddPet", (Mascot)=>{
    cy.request("POST",`${Url}/pet`, Mascot)
})

Cypress.Commands.add("UpdatePet", (Mascot)=>{
    cy.request("PUT",`${Url}/pet`,Mascot)
})

Cypress.Commands.add("GetPetForStatus", (status)=>{
    return cy.request("GET",`${Url}/pet/findByStatus?status=${status}`)
})

Cypress.Commands.add("GetPetForId" , (idMascot)=> {
    return cy.request("GET", `${Url}/pet/${idMascot}`)
})

Cypress.Commands.add("DeletePet" , (idMascot)=> {
    cy.request("DELETE", `${Url}/pet/${idMascot}`)
})