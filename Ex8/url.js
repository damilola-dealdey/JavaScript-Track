var url = '';

while (url == null || url.trim().length < 1) {
  url = prompt("Enter Url", "");
}

var newWindow = window.open(url,"newWindow","height=450,width=400,top=10,left=10,status=no,menubar=no,location=no,scrollbars=no,resizable=no,toolbar=no");
