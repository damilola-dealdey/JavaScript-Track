function User(name,age){
  this.name = name;
  this.age = parseInt(age);
}

User.prototype.compare = function(otherUser) {
  var result = '';
  if (this.age < otherUser.age) {
    result = otherUser.name + ' is older than ' + this.name;
  } else if (this.age > otherUser.age) {
    result = this.name + ' is older than ' + otherUser.name;
  } else {
    result = this.name + ' and ' + otherUser.name + ' are of the same age';
  }

  return result;
};

//Tests
var mary = new User('Mary', 14);
var jon = new User('Jon', 12);
var smith = new User ('Smith', 12);

console.log(jon.compare(mary));
console.log(mary.compare(smith));
console.log(smith.compare(jon));
