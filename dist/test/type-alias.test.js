describe("Type Alias", function () {
    it("should support in typescript", function () {
        const category = {
            id: 1,
            name: "Electronics",
        };
        const product = {
            id: "1",
            name: "Laptop",
            price: 100000,
            category: category,
        };
        console.info(category);
        console.info(product);
    });
});
export {};
