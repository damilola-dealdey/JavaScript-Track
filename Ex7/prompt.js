function Prompt(){
  this.firstname = '';
  this.lastname = '';
  this.collectData();
}

Prompt.prototype.sayHello = function(){
  return 'Hello ' + this.firstname +  ' ' + this.lastname + '!';
};

Prompt.prototype.collectData = function(){
  while (this.firstname == null || this.firstname.trim().length < 1) {
    this.firstname = prompt("What is your first name ? ", "");
  }

  while (this.lastname == null || this.lastname.trim().length < 1) {
    this.lastname = prompt("What is your last name ? ", "");
  }  

  document.getElementById('heading').innerText = this.sayHello();
};

new Prompt();

