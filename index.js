window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}
$("#skill1").on("mouseenter" , function(){
    $("#skill1").animate({opacity:2}).text("60%")
})
$("#skill1").on("mouseleave" , function(){
    $("#skill1").animate({opacity:2}).text("HTML")
})

$("#skill2").on("mouseenter" , function(){
    $("#skill2").animate({opacity:2}).text("60%")
})
$("#skill2").on("mouseleave" , function(){
    $("#skill2").animate({opacity:2}).text("CSS")
})

$("#skill3").on("mouseenter" , function(){
    $("#skill3").animate({opacity:2}).text("70%")
})
$("#skill3").on("mouseleave" , function(){
    $("#skill3").animate({opacity:2}).text("JavaScript")
})

$("#skill4").on("mouseenter" , function(){
    $("#skill4").animate({opacity:2}).text("40%")
})
$("#skill4").on("mouseleave" , function(){
    $("#skill4").animate({opacity:2}).text("Node.JS")
})


$("#skill5").on("mouseenter" , function(){
    $("#skill5").animate({opacity:2}).text("70%")
})
$("#skill5").on("mouseleave" , function(){
    $("#skill5").animate({opacity:2}).text("JQuery")
})
 function validate()
{
    alert('Thank You for your Feedback...!!')
}