function User(name,age){
  this.name = name;
  this.age = parseInt(age);
}

User.prototype.compare = function(otherUser) {
  if (this.age < otherUser.age) {
    return otherUser.name + ' is older than ' + this.name;
  } else if (this.age > otherUser.age) {
    return this.name + ' is older than ' + otherUser.name;
  } else {
    return this.name + ' and ' + otherUser.name + ' are of the same age';
  }
};

//Tests
var mary = new User('Mary', 14);
var jon = new User('Jon', 12);
var smith = new User ('Smith', 12);

console.log(jon.compare(mary));
console.log(mary.compare(smith));
console.log(smith.compare(jon));
