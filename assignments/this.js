/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this refers to the window object by default (when in the browser)
* 2. implicit binding comes from creating new function scopes
* 3. new binding creates an instance into new
* 4. explicit binding is when we using methods like call, apply or bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding (this only works in the browser)
window.name = 'Yo';

const windowModule = {
  name: 'Mr. Invisible',
  getName: function () {
    console.log(`My name is ${name}.`);
  }
};

windowModule.getName();

// Principle 2

// code example for Implicit Binding

const implicitModule = {
  name: 'Cool Mod',
  getName: function () {
    console.log(`My name is ${this.name}.`);
  }
};

implicitModule.getName();

// Principle 3

// code example for New Binding
function projectModule (args) {
  this.manager = args.manager;
  this.rating = `${args.rating}%`;
}

const project = new projectModule({ manager: 'Adam McKenney', rating: 100 });

console.log(project);

// Principle 4

// code example for Explicit Binding
implicitModule.getName.call(windowModule);
