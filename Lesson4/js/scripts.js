var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name') ? urlParams.get('name') : 'not set.';
console.log(name);
$('span.name').text(name);




function displayRadioValue() { 
  var ele = document.getElementsByName('gender'); 
  
  for(i = 0; i < ele.length; i++) { 
  
    if(ele[i].checked) { 
    	
    		document.getElementById("result").innerHTML = "Gender: "+ele[i].value; 
    } 

  } 
} 
