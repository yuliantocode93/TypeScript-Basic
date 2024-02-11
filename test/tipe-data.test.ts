describe("Data Type", function () {
  it("should say hello", function () {
    const name = "yulianto";
    expect(name).toBe("yulianto");
  });
});

describe("Data Type 2", function () {
  it("should say hello", function () {
    const name = "yulianto";
    const balance = 1000;
    const isVip = true;
    console.info(name, balance, isVip);
  });
});
