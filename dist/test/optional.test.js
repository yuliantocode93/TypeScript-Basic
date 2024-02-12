"use strict";
describe("Optional Parameter", function () {
    it("should support null and undefined", function () {
        function sayHello(name) {
            if (name !== undefined) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info("Hello Guest");
            }
        }
        sayHello("yulianto");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
