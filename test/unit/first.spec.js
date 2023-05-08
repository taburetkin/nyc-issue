import { first_one, first_two } from "../../src/index.js";

describe("first", () => {

	describe('first_one', () => {
		it('should return undefined', () => {
			const val = first_one('foo');
			expect(val).to.be.equal(undefined);
		})
	});

	describe('first_two', () => {
		it('should return undefined', () => {
			const val = first_two('foo');
			expect(val).to.be.equal(undefined);
		})
	});

});
