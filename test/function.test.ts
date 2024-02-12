describe("Function", function () {
  it("should support in typescript", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("yulianto")).toBe("Hello yulianto");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("yulianto");
  });

  it("should support default value", function () {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("yulianto")).toBe("Hello yulianto");
  });

  it("should support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
    expect(sum(1, 2, 3)).toBe(6);
  });

  it("should support optional parameter", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }

    expect(sayHello("yulianto")).toBe("Hello yulianto");
    expect(sayHello("yulianto", "kurniawan")).toBe("Hello yulianto kurniawan");
  });

  it("should support function overloading", function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }
    expect(callMe(10)).toBe(100);
    expect(callMe("yulianto")).toBe("YULIANTO");
  });

  it("should support function as parameter", function () {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpperCase(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("yulianto", toUpperCase)).toBe("Hello YULIANTO");

    expect(sayHello("yulianto", (name) => name.toUpperCase())).toBe("Hello YULIANTO");

    expect(sayHello("yulianto", (name) => name.toLowerCase())).toBe("Hello yulianto");
  });
});
