import { first_one, first_two } from "../../src/index.js";

describe("first", () => {

	describe('first_one', () => {
		it('should not throw', () => {
			expect(first_one.bind(null,'foo')).not.throw();
		})
	});

	describe('first_two', () => {
		it('should not throw', () => {
			expect(first_two.bind(null,'foo')).not.throw();
		})
	});

});
