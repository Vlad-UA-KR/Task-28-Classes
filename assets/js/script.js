// // ---------------------Task-1---------------------------


// class Circle {
// 	constructor() {
// 		this.radius = 0;
// 	}

// 	get returnRadius() {
// 		return this.radius;
// 	}

// 	set newRadius(value) {
// 		this.radius = value;
// 	}

// 	get returnDiameter() {
// 		return this.radius * 2;
// 	}

// 	areaOfCircle() {
// 		let area = (Math.PI * this.radius ** 2).toFixed(2);
// 		alert(`Площадь окружности = ${area}`);
// 	}

// 	lenghtCircle() {
// 		let length = (2 * Math.PI * this.radius).toFixed(2);
// 		alert(`Длина круга = ${length}`);
// 	}
// }

// let circle = new Circle();

// alert(`Радиус = ${circle.returnRadius}`);

// circle.newRadius = +prompt('Введите радиус');

// alert(`Радиус = ${circle.returnRadius}`);
// alert(`Диаметр = ${circle.returnDiameter}`);

// circle.areaOfCircle();
// circle.lenghtCircle();



// // ---------------------Task-2---------------------------


// let number = 0;

// class Marker {

// 	constructor(color, fuel) {
// 		this.color = `${color}`;
// 		this.ink = `${fuel}%`;
// 	}

// 	print(string) {

// 		number = parseFloat(this.ink) * 2;

// 		let stringPrint = string.slice(0, number);

// 		// let p = document.createElement('p');
// 		// document.body.prepend(p);
// 		// p.textContent = `${string}`;
// 		// p.style.color = `${this.color}`;
// 		document.body.insertAdjacentHTML('afterbegin', `<p>${stringPrint}</p>`);
// 		document.body.firstElementChild.style.color = `${this.color}`;
// 	}
// }

// class RefillMarker extends Marker {

// 	refillMarker(procents) {
// 		this.ink = parseFloat(this.ink) + procents;
// 	}
// }


// let markerOne = new Marker('green', 40);
// let markerTwo = new RefillMarker('red', 20);

// markerTwo.refillMarker(40);
// markerTwo.refillMarker(40);
// markerTwo.refillMarker(40);

// markerTwo.print('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam et rerum deserunt perferendis atque cum quae dignissimos. Natus eligendi aspernatur earum sunt dolores facere eum voluptates unde exercitationem dolor ullam consequatur quos, labore porro, animi id beatae. Rerum aperiam aspernatur quas recusandae eaque quos porro expedita amet in molestias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam et rerum deserunt perferendis atque cum quae dignissimos.');

// markerOne.print('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam et rerum deserunt perferendis atque cum quae dignissimos. Natus eligendi aspernatur earum sunt dolores facere eum voluptates unde exercitationem dolor ullam consequatur quos, labore porro, animi id beatae. Rerum aperiam aspernatur quas recusandae eaque quos porro expedita amet in molestias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam et rerum deserunt perferendis atque cum quae dignissimos.');


// // ---------------------Task-3---------------------------

// let workers = [];

// class Employee {

// 	constructor(name, surname, age, sex) {
// 		this.name = name;
// 		this.surname = surname;
// 		this.age = age;
// 		this.sex = sex;
// 		workers.push(this);
// 	}

// }

// let question = confirm('Хотите добавить работника?');

// while (question == true) {

// 	let name = 0;
// 	let surname = 0;
// 	let age = 0;
// 	let sex = 0;

// 	let enterName = prompt('Имя');
// 	if (enterName != '' && enterName != null) {
// 		name = enterName;
// 	} else if (name == '' || name == null) {
// 		break;
// 	};
// 	let enterSurname = prompt('Фамилия');
// 	if (enterSurname != '' && enterSurname != null) {
// 		surname = enterSurname;
// 	} else if (enterSurname == '' || enterSurname == null) {
// 		break;
// 	};
// 	let enterAge = prompt('Возраст');
// 	if (enterAge != '' && enterAge != null) {
// 		age = enterAge;
// 	} else if (enterAge == '' || enterAge == null) {
// 		break;
// 	};
// 	let enterSex = prompt('Пол');
// 	if (enterSex != '' && enterSex != null) {
// 		sex = enterSex;
// 	} else if (enterSex == '' || enterSex == null) {
// 		break;
// 	};

// 	worker = new Employee(name, surname, age, sex);
// };


// // let worker1 = new Employee("Ярослав", "Назаренко", "26", "Мужской");
// // let worker2 = new Employee("Владислав", "Федорченко", "26", "Мужской");
// // let worker3 = new Employee("Христина", "Бойчук", "27", "Женский");
// // console.log(workers);

// class EmpTable {

// 	constructor(array) {
// 		this.array = array;
// 	}

// 	getHtml() {

// 		let createTable = document.createElement('table');
// 		document.body.prepend(createTable);
// 		let table = document.body.firstElementChild;
// 		table.insertAdjacentHTML("beforeend", '<tr><th>Имя</th><th>Фамилия</th><th>Возраст</th><th>Пол</th></tr>');

// 		for (let obj of this.array) {
// 			table.insertAdjacentHTML("beforeend", `<tr><th>${obj.name}</th><th>${obj.surname}</th><th>${obj.age}</th><th>${obj.sex}</th></tr>`);
// 		}
// 	}
// }

// let createTable = new EmpTable(workers);
// createTable.getHtml();

