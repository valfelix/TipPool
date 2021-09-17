describe("Payments test with tear-down", function () {
    it("should add a new payment to allPayments on submitPaymentInfo()", function() {
        submitPaymentInfo()

        expect(Object.keys(allPayments).length).toEqual(0);
    })

    it("should add bill and tip amount on createCurPayment()", function() {
        submitPaymentInfo()
        createCurPayment()

        let billAmt = billAmtInput.value;
        expect(billAmt).toEqual(billAmt);
    })

    afterEach(function() {
        paymentId = 0;
        allPayments = {};
        paymentTbody.innerHTML = '';
    })
})