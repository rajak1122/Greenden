//Selecting side navbar and menu icon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click", function(){
    sidenav.style.right="-50%"
})

//Search functionality

var search = document.getElementById("search")
var productcontainer = document.getElementById("productcontainer")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var searchelement = event.target.value.toUpperCase()
    for(count=0; count<productlist.length; count=count+1){
        var productname = productlist[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(searchelement)<0){
            productlist[count].style.display="none"
        } else {
            productlist[count].style.display="block"
        }
    }
})