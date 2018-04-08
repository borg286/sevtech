
$(document).ready(function(e) {
  var div = document.createElement("div");
  div.setAttribute("id", "ref");
  document.getElementsByTagName('body')[0].appendChild(div);
  	$('section').tocible({ 
    heading: 'h1', //[selector], the first level heading
    subheading: 'h2', //[selector], the second level heading
    reference:'.ref', title:'Contents'});
});
