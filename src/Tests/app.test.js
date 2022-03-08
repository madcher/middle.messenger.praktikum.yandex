const isEmptyObject = (obj) => {
	return (Object.keys(obj).length !== 0);
};

const toLowerCase = (str) => {
	return str.toLowerCase();
};


test('Obj is empty', () => {
	expect(isEmptyObject({})).toBe(false);
});

test('Obj is not empty', () => {
	expect(isEmptyObject({a: 1})).toBe(true);
});

test('lower case test', () => {
	expect(toLowerCase('ABC')).toBe('abc');
});
