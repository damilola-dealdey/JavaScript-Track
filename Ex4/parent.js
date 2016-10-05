function Parent(elemId, childBoxes ) {
  var _parent = this;
  this.box = document.getElementById(elemId);
  this.divSibling = this.box.nextElementSibling;
  this.children = [];

  for (var i = 0; i < childBoxes.length; i++) {
    this.children.push(new Child(childBoxes[i]));
  }

  this.box.addEventListener("click",function() {
    _parent.toggleChildren(this.checked);
    _parent.children[_parent.children.length - 1].box.scrollIntoViewIfNeeded();
  },false);

  this.toggleChildren(false);

}



Parent.prototype.toggleChildren = function(status){
  if (this.box.checked) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].box.checked = true;
      this.divSibling.removeAttribute("hidden");
    }
  } else {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].box.checked = false;
      this.divSibling.hidden = "hidden";
    }
  }
};