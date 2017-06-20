$(document).ready(function(){
  $("form#registration").submit(function(event){
    var name=$("input#name").val();
    var email=$("input#email").val();
    var plan=$("input#plan").val();

    alert("thank you " + name + " for subscribing to " + plan + "plan.You will get further details in " + email);

  });
  $("button#healthbutton").click(function(){
    $("#rowhealth").show();
    $("#feedrow").hide();
  });
  $("button#foodbutton").click(function(){
    $("#rowhealth").hide();
    $("#feedrow").show();
  });


});
