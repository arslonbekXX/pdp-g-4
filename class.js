"use strict";

function User(name) {
  this.name = name;
  this.myName = function () {
    console.log(`My name is ${this.name}`);
  };
}

class _User {
  constructor(name) {
    this.name = name;
  }

  myName() {
    console.log(`My name is ${this.name}`);
  }
}

const user = new User("userbek");
const _user = new _User("_userbek");

user.myName();
_user.myName();

class App extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
