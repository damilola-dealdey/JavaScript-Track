function AddEvents(elemId,childBoxes){
  var elem = document.getElementById(elemId);
  if (elem) {
    elem.addEventListener("click",function() {
      ToggleBoxes(this, this.checked);
      ToggleChildBoxes(childBoxes, this.checked);
      if (childBoxes) {
        childBoxes[childBoxes.length - 1].scrollIntoViewIfNeeded();
      }
    },false);
    return elem;
  }
  return null;
}

function ToggleChildBoxes(boxes,status) {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].checked = status;
  }
}

function ToggleBoxes(elem,status,children) {
  var sisterDiv = elem.nextElementSibling;
  if (sisterDiv) {
    if (status) {
      sisterDiv.removeAttribute("hidden");
    } else {
      sisterDiv.hidden = "hidden" ;
    }
  }
}


var _colorBoxes = document.querySelectorAll('input.colorbox');
var _movieBoxes = document.querySelectorAll('input.moviebox');
var _drinksBoxes = document.querySelectorAll('input.drinkbox');
var _bikesBoxes = document.querySelectorAll('input.bikebox');

var colorBox = AddEvents('colorBox',_colorBoxes);
var movieBox = AddEvents('movieBox', _movieBoxes);
var drinksBox = AddEvents('drinksBox', _drinksBoxes);
var bikesBox = AddEvents('bikesBox', _bikesBoxes);

ToggleBoxes(colorBox, false);
ToggleBoxes(movieBox, false);
ToggleBoxes(drinksBox, false);
ToggleBoxes(bikesBox, false);
