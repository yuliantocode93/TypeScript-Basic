"use strict";
describe("Array", function () {
    it("should same with javascript", function () {
        const names = ["yulianto", "joko", "budi"];
        const values = [1, 2, 3];
        console.info(names, values);
    });
    it("should support read only array", function () {
        const hobbies = ["yulianto", "joko", "budi"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
    });
    it("should support tupple", function () {
        const person = ["yulianto", "joko", 24];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});
