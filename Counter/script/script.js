
 var count = null;
 var span =  document.querySelector("span");
 var x = document.getElementById("myNumber").value;
 var combine = x + count;

 console.log(combine);

 span.innerText = count; 


 function negative () {

  count = count - 1;
  span.innerText = count;

 }

function positive () { 
    
    count = count + 1;
    span.innerText = count;

}

function myFunction() {
    var x = document.getElementById("myNumber").value;
    document.getElementById("query").innerHTML = x + count;
}