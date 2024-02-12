describe("Optional Parameter", function () {
  it("should support null and undefined", function () {
    function sayHello(name?: string | null) {
      if (name !== undefined) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello Guest");
      }
    }

    sayHello("yulianto");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
