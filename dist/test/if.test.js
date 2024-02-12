"use strict";
describe("if statement", function () {
    it("should support in typescript", function () {
        const examValue = 100;
        if (examValue > 90) {
            console.info("passed");
        }
        else if (examValue > 80) {
            console.info("passed");
        }
        else {
            console.info("failed");
        }
    });
    it("should support ternary operator", function () {
        const value = 100;
        const say = value > 90 ? "passed" : "failed";
        console.info(say);
    });
    it("should support switch statement", function () {
        function sayHello(name) {
            switch (name) {
                case "yulianto":
                    return "Hello yulianto";
                case "joko":
                    return "Hello joko";
                default:
                    return "Hello Guest";
            }
        }
        console.info(sayHello("joko"));
        console.info(sayHello("yulianto"));
        console.info(sayHello("Guest"));
    });
});
