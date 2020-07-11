
  
  
  window.addEventListener("resize", function(){
    var media = window.innerWidth;
    if (media< 992) { 
      document.getElementById("links").innerHTML="<a href='#' class='text-decoration-none'><img class='icon' src='images/menu.png'>Menu</a>";
    }
    else{
        document.getElementById("links").innerHTML='<a class="text-decoration-none" href="#">Home</a><a class="text-decoration-none" href="#">Portfolio</a><a class="text-decoration-none" href="#">Staff</a> <a class="text-decoration-none" href="#">Features</a> <a class="text-decoration-none" href="#">Blog</a> <a class="text-decoration-none" href="#">Contact</a><a class="text-decoration-none" href="#">Download</a>';
    }
  });

