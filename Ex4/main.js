function Parent(ElemId, ChildBoxes ) {
  var _parent = this;
  this.Box = document.getElementById(ElemId);
  this.DivSibling = this.Box.nextElementSibling;
  this.Children = [];

  for (var i = 0; i < ChildBoxes.length; i++) {
    this.Children.push(new Child(ChildBoxes[i]));
  }

  this.Box.addEventListener("click",function() {
    _parent.ToggleChildren(this.checked);
    _parent.Children[_parent.Children.length - 1].Box.scrollIntoViewIfNeeded();
  },false);

}

Parent.prototype.ToggleChildren = function(status){
  if (this.Box.checked) {
    for (var i = 0; i < this.Children.length; i++) {
      this.Children[i].Box.checked = true;
      this.DivSibling.removeAttribute("hidden");
    }
  } else {
    for (var i = 0; i < this.Children.length; i++) {
      this.Children[i].Box.checked = false;
      this.DivSibling.hidden = "hidden";
    }
  }
};

function Child(Elem) {
  this.Box = Elem;
}

var _colorBoxes = document.querySelectorAll('input.colorbox');
var _movieBoxes = document.querySelectorAll('input.moviebox');
var _drinksBoxes = document.querySelectorAll('input.drinkbox');
var _bikesBoxes = document.querySelectorAll('input.bikebox');

var colorBox = new Parent('colorBox', _colorBoxes);
colorBox.ToggleChildren(false);
var movieBox = new Parent('movieBox', _movieBoxes);
movieBox.ToggleChildren(false);
var drinksBox = new Parent('drinksBox', _drinksBoxes);
drinksBox.ToggleChildren(false);
var bikesBox = new Parent('bikesBox', _bikesBoxes);
bikesBox.ToggleChildren(false);
