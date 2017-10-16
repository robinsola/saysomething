$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var saySomethingInput = $("input#saySomething").val();

    $(".saySomething").text(saySomethingInput);

    $("#response").show();

    event.preventDefault();
  });
});
