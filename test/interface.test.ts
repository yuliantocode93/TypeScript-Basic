import { Employee, Manager } from "../src/employee";
import { Seller } from "../src/seller";
import { Person } from "../src/person";

describe("Interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "store ABC",
      nib: "1234567890",
      npwp: "1234567890",
    };

    seller.name = "store DEF";
    console.info(seller);
  });

  it("should support readonly", function () {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(1, 2)).toBe(3);
  });

  it("should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["yulianto", "joko", "budi"];
    console.info(names);
  });

  it("should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "yulianto",
      address: "indonesia raya",
    };

    expect(dictionary.name).toBe("yulianto");
    expect(dictionary.address).toBe("indonesia raya");
  });

  it("should support indexable interface ", function () {
    const employee: Employee = {
      id: "1",
      name: "kwon",
      devision: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "yulianto",
      devision: "IT",
      numberOfEmployee: 10,
    };

    console.info(manager);
  });

  it("should support function in interface ", function () {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person: Person = {
      name: "yulianto",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("joko"));
  });

  it("should support function interface ", function () {
    interface HashName {
      name: string;
    }

    interface HashId {
      id: string;
    }

    type Domain = HashId & HashName;

    const domain: Domain = {
      id: "1",
      name: "yulianto",
    };

    console.info(domain);
  });

  it("should support type assertions ", function () {
    const person: any = {
      name: "yulianto",
      age: 24,
    };

    const person2: Person = person as Person;
    console.info(person2);
  });
});
