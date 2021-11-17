import { parse } from "../src/markdowntohtml";

describe("idk", () => {
	it("should work", () => {
		expect(parse("ohno")).toBe("e");
	})
});
