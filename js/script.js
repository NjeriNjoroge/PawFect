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
  $(".pic1").click(function(){
    $(".pic2").hide();
    $(".pic3").hide();
    $(".pic4").hide();
    $(".originalformula").show();
  })
  $(".pic2").click(function(){
    $(".pic1").hide();
    $(".pic3").hide();
    $(".pic4").hide();
    $(".topdog").show();
  })
  $(".pic3").click(function(){
    $(".pic2").hide();
    $(".pic1").hide();
    $(".pic4").hide();
    $(".genetics").show();
  })
  $(".pic4").click(function(){
    $(".pic2").hide();
    $(".pic3").hide();
    $(".pic1").hide();
    $(".wildog").show();
  })
  $(".productinfo").click(function(){
    $(".pic1").show();
    $(".pic2").show();
    $(".pic3").show();
    $(".pic4").show();
    $(".productinfo").hide();
  })

});
