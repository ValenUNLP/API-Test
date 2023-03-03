describe("DeleteUser",()=>{

    const User = require("../../fixtures/UserData.json").user

    before(()=>{
        cy.AddUser(User)
    })

    it("Deberia eliminarse el usuario", ()=>{
        cy.DeleteUser(User.username)
        cy.GetUserForName(User.username).should(error =>{
            expect(error.status).to.eq(404)
            expect(error.body.message).to.eq("User not found")
        })
    })
})