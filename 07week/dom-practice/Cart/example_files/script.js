var liList = document.getElementById("myul").getElementsByTagName("li");

var largo = liList.length

alert("there are " +largo+ " items in cart.");

var h2 = document.getElementById("youHave");
h2.innerHTML = ("There are " +largo+ " items in cart.");
console.log(largo);


$("#btn2").click(function(){
$( "<li class=\"new\">new list item</li>" );
});
