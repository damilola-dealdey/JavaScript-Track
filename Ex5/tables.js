function Contact(name,email){
  var _contact = this;
  this.Name = name;
  this.Email = email;
  this.HoldingRow = document.createElement("tr");
  this.ColumnOne = makeACell();
  this.ColumnTwo = makeACell();
  this.ColumnThree = makeACell();
  this.NameSpan = document.createElement("span");
  this.EmailSpan = document.createElement("span");
  this.NameField = document.createElement("input");
  this.EmailField = document.createElement("input");
  this.EmailField.type = "email";
  this.EditButton = makeAButton("Edit");
  this.DeleteButton = makeAButton("Delete");
  this.SaveButton = makeAButton("Save");
  this.SaveButton.addEventListener("click", function(){
    SaveData(_contact);
  } , false);
  this.EditButton.addEventListener("click", function(){
    _contact.formify();
  } , false);
  this.DeleteButton.addEventListener("click", function(){
    table.tBodies[0].deleteRow(_contact.index);
  } , false);
  this.HoldingRow.appendChild(this.ColumnOne);
  this.HoldingRow.appendChild(this.ColumnTwo);
  this.HoldingRow.appendChild(this.ColumnThree);
  this.index = 0;
}

Contact.prototype.flushColumns = function(){
  this.ColumnOne.innerHTML = '';
  this.ColumnTwo.innerHTML = '';
  this.ColumnThree.innerHTML = '';
};

Contact.prototype.giveValues = function(){
  this.NameField.value = this.Name;
  this.EmailField.value = this.Email;
};

Contact.prototype.updateSpans = function(){
  this.NameSpan.innerText = this.Name;
  this.EmailSpan.innerText = this.Email;
};

Contact.prototype.display = function() {
  this.updateSpans();
  this.flushColumns();
  this.ColumnOne.appendChild(this.NameSpan);
  this.ColumnTwo.appendChild(this.EmailSpan);
  this.ColumnThree.appendChild(this.EditButton);
  this.ColumnThree.appendChild(this.DeleteButton);
};

Contact.prototype.formify = function(){
  this.giveValues();
  this.flushColumns();
  this.ColumnOne.appendChild(this.NameField);
  this.ColumnTwo.appendChild(this.EmailField);
  this.ColumnThree.appendChild(this.SaveButton);
};

Contact.prototype.Unformify = function(){
  this.Name = this.NameField.value;
  this.Email = this.EmailField.value;
  this.display();
};

function SaveData(Contact) {
  if (Contact.NameField.value.length < 1 || Contact.EmailField.value.length < 1 ) {
    alert('Incomplete Details.');
  } else if( !Contact.EmailField.checkValidity() ) {
    alert('Please provide a valid email.');
  } else {
    Contact.Unformify();
  }
}

function makeAButton(text) {
  var button =  document.createElement("button");
  if (text) {
    button.innerText = text;
  }
  return button;
}

function makeACell(value) {
  var td =  document.createElement("td");
  if (value) {
    td.innerText = value;
  }
  return td;
}

var table = document.getElementById('table');
table.border = 1;

var addBtn = document.getElementById('addNewItem');
addBtn.addEventListener("click",function() {
  //this.disabled = true;
  var contact = new Contact('','');
  contact.formify();
  table.tBodies[0].appendChild(contact.HoldingRow);
  contact.index =  table.tBodies[0].rows.length - 1;
},false);
