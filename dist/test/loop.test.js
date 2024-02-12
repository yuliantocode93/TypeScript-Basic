"use strict";
describe("Loop", function () {
    it("should support in typescript", function () {
        const names = ["yulianto", "joko", "budi"];
        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }
        for (const name of names) {
            console.info(name);
        }
        for (const [index, name] of names.entries()) {
            console.info(index, name);
        }
    });
    it("should support do while loop", function () {
        let counter = 0;
        do {
            console.info(counter);
            counter++;
        } while (counter < 10);
    });
    it("should support break and continue", function () {
        let counter = 0;
        do {
            counter++;
            if (counter == 10) {
                break;
            }
            if (counter % 2 == 0) {
                continue;
            }
            console.info(counter);
        } while (true);
    });
});
