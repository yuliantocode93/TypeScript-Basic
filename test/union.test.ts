describe("Union Type", function () {
  it("should support union type", function () {
    let sample: number | string | boolean = "yulianto";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should support typeof operator", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      } else {
        return !value;
      }
    }

    expect(process("yulianto")).toBe("YULIANTO");
    expect(process(100)).toBe(1000);
    expect(process(true)).toBe(false);
  });
});
