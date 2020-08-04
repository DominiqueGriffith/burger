// $(function() {

$("#create-form").on("click", function () {

  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  console.log("I'm clicked")

  var newBurger = $("#burger-submit").val().trim();
var burgerOBJ = {
  burger_name: newBurger
}

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
      // location.reload();

    }
  );
});

// });