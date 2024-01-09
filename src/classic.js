/* unused
function printDiv(id) {
  var prtContent = document.getElementById(id);
  var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
  WinPrint.document.write(prtContent.innerHTML);
  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
  WinPrint.close();
}
*/

// Opens a new tab from a function instead of a link
function openTab(url, onsite=true) {
  var path;
  if (onsite==true) {
    path = 'https://bd103.github.io/Notepad' + url;
  }
  else {
    path = url;
  }
  window.open(path, '_blank');
}

// Saves #note to to browser data
function saveNote() {
  instance = document.forms["instanceSelect"]["instance"].value;
  localStorage.setItem(instance, document.getElementById('note').innerHTML);
  window.alert("Note saved.")
}

// Loads note from browser data
function loadNote() {
  instance = document.forms["instanceSelect"]["instance"].value;
  document.getElementById('note').innerHTML = localStorage.getItem(instance);
  window.alert("Note loaded.")
}

// Keybinding
document.onkeyup = function(e) {
  if (e.ctrlKey && e.which == 77) {
    saveNote();
  } else if (e.ctrlKey && e.which == 66) {
    loadNote();
  }
}