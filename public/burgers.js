$(function() {

$("#create-form").on("click", function () {

  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  console.log("I'm clicked")

  // var newBurger = $("#burger-submit").val().trim();
var burgerOBJ = {
  burger_name: $("#burger-submit").val().trim(),
  devoured: 1
};

  console.log("This is " + burgerOBJ);

  // Send the POST request.
  $.ajax("/api/posts", {
    type: "POST",
    data: burgerOBJ 
  })
  .then(
    function (response) {
      console.log("created new burger");
      console.log(response);
     
      // Reload the page to get the updated list
      location.reload();
      
    }
  );
});

$(".devour").on("click", function () {

  var id = $(this).data("id");
  var newDevoured = $(this).data("newdevour");

  var newDevouredState = {
    devoured: newDevoured
  };



    // Send the PUT request.
    $.ajax("/api/posts/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

$(".delete-burger").on("click", function(event) {
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/posts/" + id, {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});


});