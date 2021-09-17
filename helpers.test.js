describe("Helpers test with tear-down", function() {
    it("should convert the bill and tip amount into a tip percent on calculateTipPercent()", function() {
        expect(calculateTipPercent(billAmt=100, tipAmt=20)).toEqual(20)
    })
})