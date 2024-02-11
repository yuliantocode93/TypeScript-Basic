"use strict";
describe("Any", function () {
    it("should support in typescript", function () {
        const person = {
            id: 1,
            name: "yulianto",
            age: 24,
        };
        person.age = "24";
        person.address = "Indonesia";
        console.info(person);
    });
});
