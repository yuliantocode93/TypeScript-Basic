import { CustomerType } from "../src/enum";
describe("Enum", function () {
    it("should support in typescript", function () {
        const customerType = CustomerType.REGULAR;
        console.info(customerType);
    });
});
