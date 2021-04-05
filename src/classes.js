// @ts-check

/**
 * Class to create a programmer - Learn more -> {@tutorial second-tutorial }
 * @example
 * const programmer = new Programmer({id, name, active: true}, "Python");
 * programmer.getInfo();
 *
 * Puedes enlazar otra documentacion o enlace a otra pagina.
 * @see https://github.com/gabrielba15
 * @see https://developer.github.com/v3/repos
 *
 * @todo Implement rest of method.
 */
class Programmer {
	/**
	 * @param {User} user User's information
	 * @param {string} languaje Programming Languaje
	 */
	constructor(user, languaje) {
		this.name = user.name;
		this.languaje = languaje;
	}

	/**
	 * Get programmer information.
	 * @returns {void} Show programmer information in the console.
	 */
	getInfo() {
		console.log(
			`I am ${this.name} and my fav programming languaje is ${this.languaje}`
		);
	}
}

/**
 * Know more in {@link Programmer}
 */

const programmerOne = new Programmer(
	{ id: 1, name: 'Gabriel', active: true },
	'Typescript'
);
const programmerTwo = new Programmer(
	{ id: 1, name: 'Gabriel', active: true },
	'Python'
);

programmerOne.getInfo();
programmerTwo.getInfo();
