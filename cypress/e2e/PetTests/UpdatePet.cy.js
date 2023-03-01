describe("UpdatePet",()=>{

    const pet = require("../../fixtures/PetsData.json").pet
    const newPet = require("../../fixtures/PetsData.json").petStatus
    //el status de pet y de newpet son diferentes
    before(()=>{
        cy.AddPet(pet)
    })

    it("Deberia actualizarse el status", ()=>{
        cy.UpdatePet(newPet)
        cy.GetPetForId(newPet.id).its("body").should("deep.eq", newPet)
    })

    after(()=>{
        cy.DeletePet(pet.id)
      })
})