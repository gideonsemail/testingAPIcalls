<script>

document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('getMessage').onclick=function(){
    req=new XMLHttpRequest();
    req.open("GET",'https://www.freecodecamp.org/json/cats.json',true);
    req.send();
    req.onload=function(){
      json=JSON.parse(req.responseText);
      var html = "";
      // Add your code below this line
      json.forEach(function(val) {
var keys = Object.keys(val);
html += "<div class = 'cat'>";
keys.forEach(function(key) {
  html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
});
html += "</div><br>";
});

</script>

/*/request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  data.forEach("director" => {
    // Log each movie's title
    console.log(director);
  });
  }
// Send request
