function sayHello(message){
		return function(fname, lname){
			return message+ " "+ fname + " "+ lname
		}
}
var sendWish =  sayHello("Hello");
console.log(sendWish);
console.log(sendWish("Abhi", "Shahi")) 