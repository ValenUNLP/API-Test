describe("ChangeUser",()=>{

    const User = require("../../fixtures/UserData.json").user
    const newUser = require("../../fixtures/UserData.json").otherUser

    before(()=>{
        cy.AddUser(User)
    })

    it("Deberia cambiar los datos del usuario", ()=>{
        cy.ChangeUser(User.username, newUser)
        cy.GetUserForName(User.username).should(error =>{
            expect(error.status).to.eq(404)
            expect(error.body.message).to.eq("User not found")
        })
        cy.GetUserForName(newUser.username).its("body").should("deep.eq", newUser)
    })

    after(()=>{
        cy.DeleteUser(newUser.username)
    })
})