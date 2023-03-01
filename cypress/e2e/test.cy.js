describe("test",()=>{
    const url = "petstore.swagger.io/v2/pet"
    const pet = require("../fixtures/PetsData.json").pet

      it("test",()=>{
          cy.AddPet(pet)
          cy.GetPetForId(pet.id).its("body").should("deep.eq", pet)
      })
})