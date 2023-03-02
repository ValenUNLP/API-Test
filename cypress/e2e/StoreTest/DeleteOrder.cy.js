describe("DeleteOrder",()=>{
    const order = require("../../fixtures/OrderData.json").order

    before(()=>{
        cy.AddOrder(order)
    })

    it("Deberia eliminar la orden antes creada", ()=>{
        cy.DeleteOrder(order.id)
        cy.GetOrderForId(order.id).should(order =>{
            expect(order.status).to.eq(404)
            expect(order.body.message).to.eq("Order not found")
        })
    })
})