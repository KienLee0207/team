$(document).ready(function(){
        // Phần header scroll
        window.onscroll = function() {myFunction()};

   function myFunction() {
 if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("nav").className = "fixed";
    $(".menu").css("display","none")
} else {
    document.getElementById("nav").className = "";
};
};
        $("#mega-menu").click(function(){
          $(".menu").toggle();
        });
});
