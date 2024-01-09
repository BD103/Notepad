function updateCode() {
  var code = document.getElementById('code').innerHTML;
  sessionStorage.setItem('ideCode', code);
}

function deLight() {
  resetCode();

  var cache = sessionStorage.getItem('ideCode');
  document.getElementById('code').innerHTML = cache;
}

function light() {
	var lang = document.forms['langSelect']['select'].value;
  setLang(lang);

  document.querySelectorAll("#code").forEach((block) => {
    hljs.highlightBlock(block);
  });
}

function resetCode() {
  var div = document.getElementById('code');

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function setLang(lang) {
	document.getElementById('code').setAttribute("class", "lang-" + lang + " note");
	console.log("Setting lang to " + lang);
}
