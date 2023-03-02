describe("GetInventory",()=>{

    const Pets = require("../../fixtures/PetsData.json").JsStatusPets
    const fakePet = require("../../fixtures/PetsData.json").fakePetStatus
    const PetsLength = Pets.length
    const PetsStatus = Pets[0].status
    const fakePetStatus = fakePet.status


    before(()=>{
        Pets.forEach((pet)=>{
            cy.AddPet(pet)
        })
        cy.AddPet(fakePet)
    })

    it("Deberia validar las cantidad de mascotas con cierto status", ()=>{
        cy.GetInventory().its("body").should(inventory =>{
            expect(inventory[PetsStatus]).to.eq(PetsLength)
            expect(inventory[fakePetStatus]).to.eq(1)
        })
    })

    after(()=>{
        Pets.forEach((pet)=>{
            cy.DeletePet(pet.id)
        })
        cy.DeletePet(fakePet.id)
      })
})