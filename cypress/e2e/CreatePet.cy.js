
describe("CreatePet",()=>{
    const pet = require("../fixtures/PetsData.json").pet

      it("Deberia crear una mascota",()=>{
          cy.AddPet(pet)
          cy.GetPetForId(pet.id).its("body").should("deep.eq", pet)
      })

      after(()=>{
        cy.DeletePet(pet.id)
      })
})