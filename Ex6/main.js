function Validator(){

}

Validator.prototype.HasValue = function (Elem){
  if (!Elem.value) {
    return false
  }
  var value = Elem.value;
  if (value.trim().length < 1) {
    return false;
  }
  return true;
};

Validator.prototype.ValidateMail = function(Elem) {
  if (!this.HasValue(Elem)) {
    return false;
  }

  return Elem.checkValidity();

}

Validator.prototype.HasMinValue = function(Elem, length) {
  if (!this.HasValue(Elem)) {
    return false;
  }

  return Elem.value.length >= length ;
}

var validator = new Validator();

function DoValidation(){
  var allValid = true;

  if (!validator.HasValue(loginIdBox)) {
      allValid = false;
      alert('Please provide your login Id');
  }

  if (!validator.ValidateMail(emailBox)) {
      allValid = false;
      alert('Please provide a valid email address');
  }

  if (!validator.HasValue(nameBox)) {
      allValid = false;
      alert('Please provide your name');
  }

  if (!validator.HasValue(timezoneBox)) {
      allValid = false;
      alert('Please provide select your timezone');
  }

  if (!validator.HasValue(homepageBox)) {
      allValid = false;
      alert('Please provide your homepage');
  }

  if (!validator.HasMinValue(aboutBox, 50)) {
      allValid = false;
      alert('Tell us about yourself in not less than 50 characters.');
  }

  alert(notificationBox.checked ? 'You will receive notifications' : 'You will not receive notifications');

  if (allValid) {
    alert('All fields passed validation.');
  }

}


var loginIdBox = document.getElementById('loginId');
var emailBox = document.getElementById('email');
var nameBox = document.getElementById('myName');
var timezoneBox = document.getElementById('timezone');
var homepageBox = document.getElementById('homepage');
var aboutBox = document.getElementById('about');
var notificationBox = document.getElementById('notifications');

var formButton = document.getElementById('btnGO');
formButton.addEventListener("click", function(){
  DoValidation();
} , false);
