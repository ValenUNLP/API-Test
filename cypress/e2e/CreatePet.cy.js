describe("CreatePet",()=>{
    const url = "petstore.swagger.io/v2/pet"
    const pet = require("../fixtures/PetsData.json").pet

      it("Deberia crear una mascota",()=>{
          cy.AddPet(pet)
          cy.GetPetForId(pet.id).its("body").should("deep.eq", pet)
      })
})