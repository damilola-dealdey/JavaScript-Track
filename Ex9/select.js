function Select(SelectElemId, TransferToElemId , ButtonELemId ){
  this.MyBox = document.getElementById(SelectElemId);
  this.TransferToBox = document.getElementById(TransferToElemId);
  this.MyButton = document.getElementById(ButtonELemId);
  var _select = this;
  this.MyButton.addEventListener("click", function(){
    var selectedIndex = _select.MyBox.selectedIndex;
    if (selectedIndex > -1) {
      var option = _select.MyBox.options[selectedIndex];
      _select.MyBox.remove(selectedIndex);
      _select.TransferToBox.add(option);
    }
  } , false);
}

var firstBox = new Select('boxOne','boxTwo','addBtn');
var secondBox = new Select('boxTwo','boxOne','rmvBtn');
