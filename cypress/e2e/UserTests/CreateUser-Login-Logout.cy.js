describe("CreateUser-Login-Logout",()=>{

    const User = require("../../fixtures/UserData.json").user

    it("Deberia crearse el usuario",()=>{
        cy.AddUser(User)
        cy.GetUserForName(User.username).its("body").should("deep.eq", User)
    })

    it("Deberia hacer Login del usuario", ()=>{
        cy.UserLogin(User.username, User.password).its("body").its("message").should("contain", "logged")
    })

    it("Deberia hacer Logout del usuario", ()=>{
        cy.UserLogout().its("body").its("message").should("be.eq", "ok") 
    })

    after(()=>{
        cy.DeleteUser(User.username)
    })
})