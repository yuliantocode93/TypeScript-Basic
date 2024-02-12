describe("Interface", function () {
    it("should support in typescript", function () {
        const seller = {
            id: 1,
            name: "store ABC",
            nib: "1234567890",
            npwp: "1234567890",
        };
        seller.name = "store DEF";
        console.info(seller);
    });
    it("should support readonly", function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(1, 2)).toBe(3);
    });
    it("should support indexable interface", function () {
        const names = ["yulianto", "joko", "budi"];
        console.info(names);
    });
    it("should support indexable interface for non number index", function () {
        const dictionary = {
            name: "yulianto",
            address: "indonesia raya",
        };
        expect(dictionary.name).toBe("yulianto");
        expect(dictionary.address).toBe("indonesia raya");
    });
    it("should support indexable interface ", function () {
        const employee = {
            id: "1",
            name: "kwon",
            devision: "IT",
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "yulianto",
            devision: "IT",
            numberOfEmployee: 10,
        };
        console.info(manager);
    });
    it("should support function in interface ", function () {
        const person = {
            name: "yulianto",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello("joko"));
    });
    it("should support function interface ", function () {
        const domain = {
            id: "1",
            name: "yulianto",
        };
        console.info(domain);
    });
    it("should support type assertions ", function () {
        const person = {
            name: "yulianto",
            age: 24,
        };
        const person2 = person;
        console.info(person2);
    });
});
export {};
