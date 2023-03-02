describe("CreateOrder",()=>{
    const order = require("../../fixtures/OrderData.json").order

    it("Deberia crear una orden de compra", ()=>{
        cy.AddOrder(order)
        cy.GetOrderForId(order.id).its("body").should("deep.eq", order)
    })

    after(()=>{
        cy.DeleteOrder(order.id)
    })
})