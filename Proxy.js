class Property {
	constructor() {
		this.name = null;
		this.value = null;
		return new Proxy(this, {
			get: (_, prop) => this[prop],
			set: (_, prop, value) => {
				if (!(prop in this)) console.error('Field doesn\'t exists');
				this[prop] = value;
			}
		});
	}
}

const property = new Property();
property.name = 'Nischay';
property.goku = 'suar';
