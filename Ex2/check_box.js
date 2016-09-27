function ToggleButton(SetState,ElemId){
  this.btn = document.getElementById(ElemId);
  this.SetState = SetState;
  this.btn.addEventListener("click",function() {
      ToggleBoxes(SetState);
  },false);
}


function ToggleBoxes(status) {
  var boxes = document.querySelectorAll("input.checkbox");
  for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    status ? box.setAttribute("checked","") : box.removeAttribute("checked");
  }
}

var checkBtn = new ToggleButton(true,"allCheck");
var uncheckBtn = new ToggleButton(false,"allUncheck");
