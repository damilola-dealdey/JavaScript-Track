function ToggleButton(){
  this.init();
}

ToggleButton.prototype.init = function() {
  var _this = this;
  var dom = document;
  var checkBtn = dom.getElementById('all-check');
  checkBtn.addEventListener("click",function() {
      _this.toggleBoxes(true);
  },false);

  var uncheckBtn = dom.getElementById('all-uncheck');
  uncheckBtn.addEventListener("click",function() {
      _this.toggleBoxes(false);
  },false);
}

ToggleButton.prototype.toggleBoxes = function(status) {
  var boxes = document.querySelectorAll("input.checkbox");
  for (var i = 0; i < boxes.length; i++) {
    if (status) {
      boxes[i].checked = true;
    } else {
      boxes[i].checked = false;
    }
  }
}

new ToggleButton();
