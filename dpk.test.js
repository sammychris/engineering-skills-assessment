const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should return the provided partition key when event has partitionKey property", () => {
    const event = { partitionKey: "my-partition-key" };
    expect(deterministicPartitionKey(event)).toBe(event.partitionKey);
  });

  it("should stringify non-string candidate partition keys", () => {
    const event = { partitionKey: 123 };
    expect(deterministicPartitionKey(event)).toBe("123");
  });
});
