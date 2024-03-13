
	class Calculator {
		constructor(total) {
			this.total = 0;
		}

		add(num) {
			this.total += num;
			return this.total
		}

		subtract(num) {
			this.total -= num;
			return this.total
		}

		divide(num) {
		this.total /= num
		return this.total
		}


		multiply(num) {
		this.total *= num;
		return this.total
		}
	}

let calculator = new Calculator();
console.log(calculator.add(50));      // => 50
console.log("test",calculator.total)
console.log(calculator.subtract(35)); // => 15
console.log(calculator.multiply(10)); // => 150
console.log(calculator.divide(5));    // => 30
console.log(calculator.total)

// class User {
// 	constructor(name) {
// 	  this.name = name;
// 	}

// 	add = (num) => {
// 	  this.total = num;
// 	  return num;
// 	}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
