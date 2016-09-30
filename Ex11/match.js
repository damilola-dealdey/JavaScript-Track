function Match(){
  this.RegString = /^\d{1,}$/i;
  this.init();
}

Match.prototype.init = function(){
  var _this = this;
  var submitButton = document.getElementById('submit-button');
  submitButton.addEventListener("click", function(){
    _this.test();
  }, false);
};

Match.prototype.test = function(){
  var dom = document;
  var boxOne = dom.getElementById('box-one');
  var boxTwo = dom.getElementById('box-two');
  boxTwo.value = this.RegString.test(boxOne.value.trim());
};

new Match();