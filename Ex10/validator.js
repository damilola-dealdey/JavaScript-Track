function Validator(){
  //this.mailRegEx =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  this.mailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
  this.urlRegEx = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;

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
  if (!this.HasValue(Elem) || !Elem.checkValidity()) {
    return false;
  }
  return this.mailRegEx.test(Elem.value.trim());
}

Validator.prototype.ValidateURL = function(Elem) {
  if (!this.HasValue(Elem)) {
    return false;
  }

  return this.urlRegEx.test(Elem.value);
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

  if (!validator.ValidateURL(homepageBox)) {
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
