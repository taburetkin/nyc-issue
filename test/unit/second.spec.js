import { second_one, second_two } from "../../src/index.js";

describe("second", () => {

	describe('second_one', () => {
		it('should return 42', () => {
			const val = second_one('foo');
			expect(val).to.be.equal(42);
		})
	});

	describe('second_two', () => {
		it('should return 42', () => {
			const val = second_two('foo');
			expect(val).to.be.equal(42);
		})
	});

});
