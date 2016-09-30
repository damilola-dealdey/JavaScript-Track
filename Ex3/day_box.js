function DayBox(elem){
  var _this = this;
  this.days = [];
  this.noneBox = document.getElementById('check-box-none');
  this.noneBox.addEventListener("click",function() {
     if(this.checked) {
        _this.toggleBoxes(false);
     }
  },false);
  this.init();
}

DayBox.prototype.init = function () {
  var _this = this;
  this.days = document.querySelectorAll('input.checkbox');
  for (var i = 0; i < this.days.length; i++) {
    this.days[i].addEventListener("click",function() {
       if (this.checked) {
         _this.boxCheck(this);
       }
    },false);
  }
};

DayBox.prototype.toggleBoxes = function (status) {
  for (var i = 0; i < this.days.length; i++) {
    this.days[i].checked = status;
  }
}

DayBox.prototype.boxCheck = function (selectedBox) {
  var valueArray = [];
  this.noneBox.checked = false;
  var count = 0;
  for (var i = 0; i < this.days.length; i++) {
    if(this.days[i].checked) {
      valueArray.push(this.days[i].value)
      count++;
    }
  }

  if (count > 3) {
    alert('Only 3 days can be selected. You have already selected ' + valueArray[0] + ', ' + valueArray[1] + ' and ' + valueArray[2] + ' .');
    selectedBox.checked = false;
  }
};

new DayBox();
