// $(function() {

    $("#create-form").on("click", function() {
      console.log("I'm clicked")
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = $("#burger-submit").val().trim();
        
        
        console.log(newBurger);
    
        // Send the POST request.
        $.ajax( {
          type: "POST",
          url: "/api/posts",
          data: newBurger
        }).then(
          function(response) {
            console.log("created new burger");
          console.log(response);
            // Reload the page to get the updated list
            location.reload();
          
          }
        );
      });

// });