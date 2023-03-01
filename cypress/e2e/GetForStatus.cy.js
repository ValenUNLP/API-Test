describe("GetForStatus",()=>{

    const Pets = require("../fixtures/PetsData.json").JsStatusPets
    const fakePet = require("../fixtures/PetsData.json").fakePetStatus
    const lengthPets = Pets.length

    before(()=>{
        Pets.forEach((pet)=>{
            cy.AddPet(pet)
        })
        cy.AddPet(fakePet)
    })

    it("Deberia conseguir todas las mascotas con el status: Js", ()=>{
        cy.GetPetForStatus("Js").its("body").should("have.length", lengthPets)
    })

    after(()=>{
        Pets.forEach((pet)=>{
            cy.DeletePet(pet.id)
        })
        cy.DeletePet(fakePet.id)
      })
})