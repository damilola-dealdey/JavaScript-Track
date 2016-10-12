function Match(){
  this.urlRegEx = /^(https?:\/\/)?((www)\.)?((.+)\.)?((.+)\.([^\/]{2,}))(\/.*)$/i;// I removed the 'g' tag , some bad voodoo i need to understand
  //this.subUrlRegEx = /^((\S+)?\.)?((\S+)\.(\S+))$/i;
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
    console.log(testValue);
    var authority =  this.urlRegEx.exec(testValue.trim());
    console.log(authority);
    var message;
    if (authority) {
      message = 'Domain : ' + authority[6];
      if (authority[5]) {
        message += '\nSub Domain : ' + authority[5];
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
