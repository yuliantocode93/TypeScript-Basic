import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should say hello", function () {
    const name = "yulianto";
    expect(sayHello(name)).toBe(`Hello ${name}`);
  });
});
