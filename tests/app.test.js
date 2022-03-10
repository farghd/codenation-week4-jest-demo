const app = require("../app.js");

test("Should equal 5 when passed 2 and 3", () => {
    expect(app.add(2, 3)).toBe(5);
});
test("should equal 100 when adding 50 and 50", () => {
    expect(app.add(50, 50)).toBe(100);
});

it("should include the name Dave", () => {
    expect(app.myArray).toContain("Dave");
});

////////////////////

const add = (num1, num2) => {
	return num1 + num2;
};

let myArray = ['Dan', 'Stuart', 'Ben'];

const getNotNull = () => {
	return 20;
};

const getTruthy = () => {
	return '1';
};

const getNotFalsy = () => {
	return '1';
};

const createObject = () => {
	return { firstName: 'Tracy', Age: 21 };
};

const getItems = (array) => {
	return array.filter((e) => e.length >= 6);
};

const convertNumberToString = (num) => {
	return num.toString();
};

const getPlanetFromOrder = (order) => {
	const planets = [
		'Mercury',
		'Venus',
		'Earth',
		'Mars',
		'Jupiter',
		'Saturn',
		'Uranus',
		'Neptune',
	];
	return planets[order - 1];
};

const countAmountOfPresentStudents = (attendanceArray) => {
	return attendanceArray.filter((attendance) => attendance === true).length;
};

const squareAndConcat = (digits) => {
	const digitString = digits.toString().split('');
	const result = digitString.reduce((prev, cur) => {
		prev += cur ** 2;
		return prev;
	}, '');
	return parseInt(result);
};

const convertYearToCentury = (year) => {
	return Math.floor(year / 100);
};

const binary = (binaryArray) => {
	return binaryArray.reverse().reduce((prev, curr, index) => {
		prev += curr === 1 ? 2 ** index : 0;
		return prev;
	}, 0);
};

module.exports = {
	add,
	myArray,
	getNotNull,
	getTruthy,
	getNotFalsy,
	createObject,
	getItems,
	convertNumberToString,
	getPlanetFromOrder,
	countAmountOfPresentStudents,
	squareAndConcat,
	convertYearToCentury,
	binary,
};

////////////////////

const app = require('../app.js');

test('should equal 5 when passed 2 and 3', () => {
	expect(app.add(2, 3)).toBe(5);
});

test('should contain Stuart', () => {
	expect(app.myArray).toContain('Stuart');
});

it('should not return null', () => {
	expect(app.getNotNull()).not.toBeNull();
});

it('should be truthy', () => {
	expect(app.getTruthy()).toBeTruthy();
});

it('should be not falsy', () => {
	expect(app.getNotFalsy()).not.toBeFalsy();
});

it('should create object with correct properties', () => {
	expect(app.createObject()).toMatchObject({ firstName: 'Tracy', Age: 21 });
});

describe('should return items with 6 or more characters', () => {
	it('should return correct items given array of elements containing 6 or more characters', () => {
		const input = ['javascript', 'element', 'html', 'selector', 'css', 'DOM'];
		expect(app.getItems(input)).toContain('javascript', 'selector', 'element');
		expect(app.getItems(input)).not.toContain('html', 'css', 'DOM');
	});

	it('should return no items given array of elements not containing 6 or more characters', () => {
		const input = ['html', 'css', 'DOM'];
		expect(app.getItems(input).length).toBe(0);
	});
});

it('should convert number to string', () => {
	expect(app.convertNumberToString(17)).toBe('17');
});

describe('should display correct planet given order away from the Sun', () => {
	it('should return Earth given 3rd planet from Sun', () => {
		expect(app.getPlanetFromOrder(3)).toBe('Earth');
	});

	it('should return Mercury given 1st planet from Sun', () => {
		expect(app.getPlanetFromOrder(1)).toBe('Mercury');
	});
});

describe('should count number of present students', () => {
	it('should return 4 given 4 present students and 2 absent', () => {
		expect(
			app.countAmountOfPresentStudents([false, true, false, true, true, true]),
		).toBe(4);
	});

	it('should return 2 given 2 present students and 0 absent', () => {
		expect(app.countAmountOfPresentStudents([true, true])).toBe(2);
	});

	it('should return 0 given 2 absent students and 0 present', () => {
		expect(app.countAmountOfPresentStudents([false, false])).toBe(0);
	});
});

describe('square and concat digits', () => {
	it('should square 34 and return 916', () => {
		expect(app.squareAndConcat(34)).toBe(916);
	});

	it('should square 57 and return 2549', () => {
		expect(app.squareAndConcat(57)).toBe(2549);
	});
});

describe('convert years to century', () => {
	it('should convert 1705 to 17th century', () => {
		expect(app.convertYearToCentury(1705)).toBe(17);
	});

	it('should convert 2000 to 20th century', () => {
		expect(app.convertYearToCentury(2000)).toBe(20);
	});

	it('should convert 1999 to 19th century', () => {
		expect(app.convertYearToCentury(1999)).toBe(19);
	});
});

describe('binary tests', () => {
	it('should return 1 when given 0,0,0,1 in binary', () => {
		expect(app.binary([0, 0, 0, 1])).toBe(1);
	});

	it('should return 4 when given 0,1,0,0 in binary', () => {
		expect(app.binary([0, 1, 0, 0])).toBe(4);
	});
});