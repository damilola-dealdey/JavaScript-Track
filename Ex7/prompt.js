var firstname = '',
    lastname = '';
while (firstname == null || firstname.trim().length < 1) {
  firstname = prompt("What is your first name ? ", "");
}

while (lastname == null || lastname.trim().length < 1) {
  lastname = prompt("What is your last name ? ", "");
}

var head = document.getElementById('heading');
head.innerText = 'Hello ' + firstname +  ' ' + lastname + '!';
