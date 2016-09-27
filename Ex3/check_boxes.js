function DayBox(elem){
  this.box  = elem;
  this.box.addEventListener("click",function() {
     if (this.checked) {
       BoxChecks(this);
     }
  },false);
  this.day = elem.value;
}

function ToggleBoxes(status) {
  for (var i = 0; i < Days.length; i++) {
    Days[i].box.checked = status;
  }
}

function BoxChecks(selectedBox) {
  var valueArray = [];
  noneBox.checked = false;
  var count = 0;
  for (var i = 0; i < Days.length; i++) {
    if(_boxes[i].checked) {
      valueArray.push(Days[i].day)
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

var Days = [];
var _boxes = document.querySelectorAll('input.checkbox');
for (var i = 0; i < _boxes.length; i++) {
  Days.push(new DayBox(_boxes[i]));
}
