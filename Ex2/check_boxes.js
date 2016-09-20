function ToggleBoxes(status) {
  var boxes = document.querySelectorAll("input.checkbox");
  for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    status ? box.setAttribute("checked","") : box.removeAttribute("checked");
  }
}

var checkBtn = document.getElementById("allCheck");
checkBtn.addEventListener("click",function() {
    ToggleBoxes(true);
},false);

var uncheckBtn = document.getElementById("allUncheck");
uncheckBtn.addEventListener("click",function() {
    ToggleBoxes(false);
},false);
