import { second_one, second_two } from "../../src/index.js";

describe("second", () => {

	describe('second_one', () => {
		it('should not throw', () => {
			expect(second_one.bind(null,'foo')).not.throw();
		})
	});

	describe('second_two', () => {
		it('should not throw', () => {
			expect(second_two.bind(null,'foo')).not.throw();
		})
	});

});
