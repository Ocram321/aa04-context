class Dog {
	constructor(name) {
		this.name = name;
	}

	changeName = (newName) => {
		this.name = newName;
		return this.name;
	}

	speak(word) {
		return `${this.name} says ${word}`
	}

	static makeJet(){
		let makeJet = new Dog("Jet")
		return makeJet
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
