$(document).ready(function() {
  $("#turtles2").click(function() {
    $("#turtles").show();
    $("#snakes2").hide();
    $("#insects2").hide();
  });
});

$(document).ready(function() {
  $("#snakes").click(function() {
    $("#snakes2").show();
    $("#turtles").hide();
    $("#insects2").hide();
  });
});

$(document).ready(function() {
  $("#insects").click(function() {
    $("#insects2").show();
    $("#turtles").hide();
    $("#snakes2").hide();
  });
});
