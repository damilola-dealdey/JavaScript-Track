function ToggleBoxes(status) {
  for (var i = 0; i < _boxes.length; i++) {
    _boxes[i].checked = status;
  }
}

function BoxChecks(selectedBox) {
  var valueArray = [];
  noneBox.checked = false;
  var count = 0;
  for (var i = 0; i < _boxes.length; i++) {
    if(_boxes[i].checked) {
      valueArray.push(_boxes[i].value)
      count++;
    }
  }

  if (count > 3) {
    alert('Only 3 days can be selected. You have already selected ' + valueArray[0] + ', ' + valueArray[1] + ' and ' + valueArray[2] + ' .');
    selectedBox.checked = false;
  }
}

var noneBox = document.getElementById('checkBoxNone');
noneBox.addEventListener("click",function() {
   if(this.checked) {
      ToggleBoxes(false);
   }
},false);

var _boxes = document.querySelectorAll('input.checkbox');
for (var i = 0; i < _boxes.length; i++) {
  _boxes[i].addEventListener("click",function() {
     if (this.checked) {
       BoxChecks(this);
     }
  },false);
}
