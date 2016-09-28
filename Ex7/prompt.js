function Prompt(){
  this.firstname = '';
  this.lastname = '';
}

Prompt.prototype.SayHello = function(){
  return 'Hello ' + this.firstname +  ' ' + this.lastname + '!';
}

var person = new Prompt();

while (person.firstname == null || person.firstname.trim().length < 1) {
  person.firstname = prompt("What is your first name ? ", "");
}

while (person.lastname == null || person.lastname.trim().length < 1) {
  person.lastname = prompt("What is your last name ? ", "");
}

var head = document.getElementById('heading');
head.innerText = person.SayHello();
