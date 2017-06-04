//creating Empty Object 

//Object through new
var obj= new Object;
console.log(obj);

// through letral
var obj2 = {};
console.log(obj2)

//Through Object.create  
var obj3 = Object.create(null)
console.log(obj3)

//funtion constructor way creating object
function Person(){

} 
var obj4 = new Person();
console.log(obj4)

/*var message = "Hello Abhi";
var result = "";
var s1 =message.split(" ");

console.log(s1);

for(var i=s1.length; i>0; i--)
{
	 result += s1.charAt(i);


	console.log(result);

}*/

var obj = {
	id : 1
};
obj["name"] = "Abhi";
obj.city = "Bangalore";
Object.defineProperty(obj, 'state',{
	value : "U.P."
})
/*obj = {
	state : Karnataka 
}*/
delete obj.city;

console.log(obj);

//Modifying Object

//1.PreventExtensions() it updating  deleting but not adding the property

var person1 = { name : "Aditya", age: 35}
Object.preventExtensions(person1)
person1.name="golu";
person1.city="Bangalore";

delete person1.age;
console.log(person1)

//2.seal() it updating but not adding, deleting the property

var person2 = { name : "Aditya", age: 35}
Object.seal(person2)
person2.name="golu";
person2.city="Bangalore";

delete person2.age;
console.log(person2)

//3.freeze() it is not allow to updating,adding, deleting the property

var person3 = { name : "Aditya", age: 35}
Object.freeze(person3)
person3.name="golu";
person3.city="Bangalore";

delete person3.age;
console.log(person3)


//--------Adding properties and method sto Object---------------

var person4 ={
	firstName : "Abhishek",
	lastName: "shahi",
	fullName : function(){
		return this.firstName +" "+ this.lastName;
	}

}
console.log(person4.firstName)
var fullName = person4.fullName();
console.log(fullName)

//--------get key from Object---------------

var customer ={
	name:"Gaurav",
	city: "Delhi",
	role: "mechnical Enginner",
	age : 23
}
var keys = Object.keys(customer);
console.log(keys)

var values= Object.values(customer);
console.log(values);
