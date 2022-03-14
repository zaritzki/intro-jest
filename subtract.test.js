const { test } = require('@jest/globals')
const subtract = require('./substract')

test('properly subtract two number', () => {
	expect(
		subtract(2,1)
	).toBe(1);
})