var req = new XMLHttpRequest();
if(!req){
  throw 'Unable to create HttpRequest.';
}
req.onreadystatechange = parseFunction;


function parseFunction(){
  if(this.readyState === 4){
  var gist = JSON.parse(this.responseText)
  var i;
  for(i=0; i<gist.length; i++)
  document.getElementById('out').innerHTML = JSON.stringify(gist);
  };
};

req.open("GET", "https://api.github.com/gists", true);
req.send(null);

function savePage(){
  var pg = document.getElementById("pages");
  var pgS = pg.options[pg.selectedIndex].value;
  localStorage.setItem('pages', pgS);
}
