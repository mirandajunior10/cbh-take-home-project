const { deterministicPartitionKey } = require("./dpk");

const defaultInput = {
    id: "123",
    name: "John Doe",
    email: "test@example.com",
    phone: "555-555-5555",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "USA",
    date: "2020-01-01",
    time: "12:00:00",
    zone: "America/Los_Angeles",
    car: "Mercedes-Benz",
    children: "five"
}

const inputWithPartitionKey = {
    id: "123",
    name: "John Doe",
    email: "test@example.com",
    phone: "555-555-5555",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "USA",
    date: "2020-01-01",
    time: "12:00:00",
    partitionKey: 5,
}
const inputWithHugePartitionKey = {
    id: "123",
    name: "John Doe",
    email: "test@example.com",
    phone: "555-555-5555",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "USA",
    date: "2020-01-01",
    time: "12:00:00",
    partitionKey: defaultInput,
}

const defaultPartitionKey = "3552e2f7d71af621e5c1987653e336c27c082fee9ab8f50d3908ac631cd5e2c3abcc3bd8039950f61254bc5d22c530b3466075676f06fe6acc10e79abc5db5e1"
const parsedPartitionKey = "3552e2f7d71af621e5c1987653e336c27c082fee9ab8f50d3908ac631cd5e2c3abcc3bd8039950f61254bc5d22c530b3466075676f06fe6acc10e79abc5db5e1"

describe("deterministicPartitionKey", () => {
    it("Returns the literal '0' when given no input", () => {
        const trivialKey = deterministicPartitionKey();
        expect(trivialKey).toBe("0");
    });
    it("Returns the partition key when given an input", () => {
        const trivialKey = deterministicPartitionKey(defaultInput);
        expect(trivialKey).toBe(defaultPartitionKey);
    });
    it("Returns the partition key when given an input with partitionKey prop of type number", () => {
        const trivialKey = deterministicPartitionKey(inputWithPartitionKey);
        expect(trivialKey).toBe(JSON.stringify(inputWithPartitionKey.partitionKey));
    });
    it("Returns the partition key when given an input with partitionKey prop that has a length of less than 256 of type string", () => {
        const inputWithStringPartitionKey = {...inputWithPartitionKey, partitionKey: "small string" }
        const trivialKey = deterministicPartitionKey(inputWithStringPartitionKey);
        expect(trivialKey).toBe(inputWithStringPartitionKey.partitionKey);
    });
    it("Returns the partition key when given an input with partitionKey prop that has a length of more than 256", () => {
        const trivialKey = deterministicPartitionKey(inputWithHugePartitionKey);
        expect(trivialKey).toBe(parsedPartitionKey);
    });
});