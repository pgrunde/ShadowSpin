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
  var colorObject = $('#text-1');
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
  }

  function colorShadows(color1, color2, color3, DOMobj){
    DOMobj.css("textShadow", color1.x.toString() +
      "px "+ color1.y.toString() +
      "px " + blur.toString() +
      "px #"+ color1.r + color1.g + color1.b +
      ", " + color2.x.toString() +
      "px "+ color2.y.toString() +
      "px " + blur.toString() +
      "px #"+ color2.r + color2.g + color2.b +
      ", " + color3.x.toString() +
      "px "+ color3.y.toString() +
      "px " + blur.toString() +
      "px #"+ color3.r + color3.g + color3.b)
  }

  function rotate(){
    updateValues();
    colorShadows(color1, color2, color3, colorObject);
  }

  $("#text").on("keyup", function(){
    text = $("#text").val();
    $("#text-1").empty().append(text);
  });

  $("#reverse").on("click", function(){
    speed = parseFloat($("#speed").val());
    $("#speed").val(speed * -1)
  });

  $("#transparent").click(function(){
    $("#text-1").toggleClass("invis")
  });

  init();

});