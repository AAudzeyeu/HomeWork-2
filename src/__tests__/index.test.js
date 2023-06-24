import { sum } from "../index";

describe("sum", () => {
	test("should return sum when one of parameters is string", () => {
		const result = sum(4, "5");

		expect(result).toBe(9);
	});

	test("should return sum when one of parameters is string", () => {
		const result = sum(4, "5");

		expect(result).toBe(9);
	});

	test("should return sum when one of parameters is undefined", () => {
		expect(() => sum(4, undefined)).toThrow();
	});
});
