$(document).ready(function(){
  var color1 = {
    x: 0,
    y: 0,
    r:$("#color-1-r").val(),
    g:$("#color-1-g").val(),
    b:$("#color-1-b").val(),
    angle: 5*Math.PI/6
  };
  var color2 = {
    x: 0,
    y: 0,
    r:$("#color-2-r").val(),
    g:$("#color-2-g").val(),
    b:$("#color-2-b").val(),
    angle: Math.PI/6
  };
  var color3 = {
    x: 0,
    y: 0,
    r:$("#color-3-r").val(),
    g:$("#color-3-g").val(),
    b:$("#color-3-b").val(),
    angle: 3*Math.PI/2
  };

  var hyp = $("#hyp").val();
  var Dang = parseFloat($("#speed").val());
  var blur = $("#blur").val();
  var color1Object = $('#text-1');
  var color2Object = $('#text-2');
  var color3Object = $('#text-3');
  var interval;

  function updateValues(){
    angleCalc(color1);
    angleCalc(color2);
    angleCalc(color3);
    setColorVals(color1, "1");
    setColorVals(color2, "2");
    setColorVals(color3, "3");
    setActions();
  }

  function init(){
    interval = setInterval(rotate,10)
  }

  function setActions(){
    hyp = $("#hyp").val();
    Dang = parseFloat($("#speed").val());
    blur = $("#blur").val();
  }

  function setColorVals(color, num){
    color.r = $("#color-" + num + "-r").val();
    color.g = $("#color-" + num + "-g").val();
    color.b = $("#color-" + num + "-b").val();
  }

  function angleCalc(color){
    xOut = Math.cos(color.angle)*hyp;
    yOut = Math.sin(color.angle)*hyp;
    color.angle += Dang;
    color.x = Number(xOut.toFixed(2));
    color.y = Number(yOut.toFixed(2));
    console.log(Dang)
  }

  function colorShadows(color, DOMobj){
    DOMobj.css("textShadow", color.x.toString() +
      "px "+ color.y.toString() +
      "px " + blur.toString() +
      "px rgba(" + color.r.toString() +
      ", "+ color.g.toString() +
      ", "+ color.b.toString() +
      ", 1)")
  }

//  function color2Shadows(color, DOMobj){
//    DOMobj.css("textShadow", color.x.toString() +"px "+ color.y.toString() +"px " + blur.toString() + "px rgba(255, 15, 174, 1)")
//  }
//  function color3Shadows(color, DOMobj){
//    DOMobj.css("textShadow", color.x.toString() +"px "+ color.y.toString() +"px " + blur.toString() + "px rgba(255, 251, 3, 1)")
//  }

  function rotate(){
    updateValues();
    colorShadows(color1,color1Object);
    colorShadows(color2,color2Object);
    colorShadows(color3,color3Object);
  }

  $("#text").on("keyup", function(){
    text = $("#text").val();
    $("#text-1").empty().append(text);
    $("#text-2").empty().append(text);
    $("#text-3").empty().append(text)
  });

  init();

//  $(document).on("mouseover", ".magic", function(){
//    init();
//  });

//  $(document).on("mouseleave", ".magic", function(){
//    clearInterval(interval);
//    blueObject.css("textShadow","none");
//    redObject.css("textShadow","none");
//    yellowObject.css("textShadow","none");
//    Dang = Dang * -1
//  });


});