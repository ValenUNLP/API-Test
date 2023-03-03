describe("CreateUserList",()=>{

    const Users = require("../../fixtures/UserData.json").userList

    it("Deberia crearse el usuario",()=>{
        cy.AddUserList(Users)
        Users.forEach((user)=>{
            cy.GetUserForName(user.username).its("body").should("deep.eq", user)
        })
    })


    after(()=>{
        Users.forEach((user)=>{
            cy.DeleteUser(user.username)
        })
    })
})