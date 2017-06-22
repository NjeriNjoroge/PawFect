$(document).ready(function(){
  $("form#registration").submit(function(event){
    /*getting input from user*/
    var name=$("input#name").val();
    var email=$("input#email").val();
    var plan=$("input#plan").val();
    /*will pop up after user submits information*/
    swal("thank you " + name + " for subscribing to " + plan + "plan.You will get further details in " + email);
  });


  /*click function for button in carosel*/
  $("button#healthbutton").click(function(){
    $("#rowhealth").show();
    $("#feedrow").hide();
    /*ensure page scrolls to the right section*/
    window.scrollTo( 0, 800 );
  });
    /*click function for button in carosel*/
  $("button#foodbutton").click(function(){
    $("#rowhealth").hide();
    $("#feedrow").show();
    window.scrollTo( 0, 1300 );
  });
  /*click function for the images in food section*/





});
