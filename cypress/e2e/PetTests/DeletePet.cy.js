describe("DeletePet",()=>{
    const pet = require("../../fixtures/PetsData.json").pet

    before(()=>{
        cy.AddPet(pet)
    })

    it("Deberia eliminar la mascota antes creada", ()=>{
        cy.DeletePet(pet.id)
        cy.GetPetForId(pet.id).its("body").its("message").should("be.eq","Pet not found")
    })
})