function Match(){
  this.urlRegEx = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?/i;
  this.subUrlRegEx = /^((\S+)?\.)?((\S+)\.(\S+))$/i;
  this.init();
}

Match.prototype.init = function(){
  var _this = this;
  var submitButton = document.getElementById('submit-button');
  submitButton.addEventListener("click", function(){
    _this.test();
  }, false);
};

Match.prototype.test = function() {
  var testValue = document.getElementById('box-one').value;
  if (testValue && testValue.trim().length > 0) {
    var authority =  this.urlRegEx.exec(testValue.trim());
    var message;
    if (authority) {
      var subDomain =  this.subUrlRegEx.exec(authority[1]);
      message = 'Domain : ' + subDomain[3];
      if (subDomain && subDomain[2]) {
        message += '\nSub Domain : ' + subDomain[2];
      }
    } else {
      message = 'Please provide a valid Url';
    }
    alert(message);
    return;
  }
  alert('Please input a valid Url');
};

new Match();
