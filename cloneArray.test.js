const { test } = require('@jest/globals')
const cloneArray = require('./cloneArray')

test('properly clone array', () => {
	const arr = [1,2,3];
	expect(
		cloneArray(arr)
	).toEqual(arr)

	expect(
		cloneArray(arr)
	).not.toBe(arr)
})