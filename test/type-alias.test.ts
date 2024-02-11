import { Category, Product } from "../src/type-alias";

describe("Type Alias", function () {
  it("should support in typescript", function () {
    const category: Category = {
      id: 1,
      name: "Electronics",
    };
    const product: Product = {
      id: "1",
      name: "Laptop",
      price: 100000,
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});
