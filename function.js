/*******Creating function*********/

/*******1.Regular Function*******/

function sayHello(){
	console.log("Hello World")
}
var message = sayHello();
console.log(message);

/*******1.anonymous Function*******/
var  sayAgain = function(){
	return "Hello Again!!!"
}
console.log(sayAgain);
console.log(sayAgain());

/*******1.constructor Function*******/
function Person(fname, lname){
	this.firstName = fname;
	this.lastName = lname;
	this.fullName = function(){
		return this.firstName + " "+ this.lastName;
	}
}
var newPerson1 = new Person("Abhi", "Shahi");   //its create each time memory show create prototype  
var newPerson2 = new Person("Aadi", "Shahi");
var newPerson3 = new Person("Gaurav", "Shahi");
console.log(newPerson1.fullName());
console.log(newPerson2.fullName())
console.log(newPerson3.fullName())

/*******1.constructor Function*******/
function Person(fname, lname){
	this.firstName = fname;
	this.lastName = lname;
	Person.prototype.fullName = function(){
		return this.firstName + " "+ this.lastName;
	}
}
var newPerson1 = new Person("Abhi", "Shahi");
var newPerson2 = new Person("Aadi", "Shahi");
var newPerson3 = new Person("Gaurav", "Shahi");
console.log(newPerson1.fullName())
console.log(newPerson2.fullName())
console.log(newPerson3.fullName())

/*******1.self Function*******/

/*(function(){
	console.log("Hello")
})
();*/

