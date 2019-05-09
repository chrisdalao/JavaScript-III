/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
Window/Global Object Binding - when 'this' is used in Object binding - I would refer to it as the default way to use 'this'.
* 2. 
Implicit Binding - this is the most used principle where 'this' refers to the object that's before the 'dot' and outputs the logic in that object whether it be a function or property - it also depends on how to call that specific object.
* 3. 
New Binding - this is when you create an instance of an Object and inherit everything from that object while also adding a new property it like a new 'name' or 'age'.
* 4. 
Explicit Binding - in this case, you would force a function call for an object to use - and that function will be for 'this' - examples would be .call(), .apply(), .bind()
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var myFunction = function () {
    console.log(this);
}

myFunction();

// Principle 2

// code example for Implicit Binding
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo();

// Principle 3

// code example for New Binding
function Foo(name) {
    this.name = name;
    this.greeting = 'how are you?';

    this.say = function () {
        return `Hello, my name is ${this.name}, ${this.greeting}`;
    };

}

var name = 'Ben';
var result = new Foo(name);// takes in the Window 'name' and logs it
console.log(result.name);
var result = new Foo("Chris");// passes "Chris" in and logs it
console.log(result.name);
console.log(result.say()); //takes new instance of Foo and calls say() function


// Principle 4

// code example for Explicit Binding

function greet() {
    console.log(this.name);//logs name
}

var person = {
    name: 'Alex',
    age : 28
}

greet.call(person); 