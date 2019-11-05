// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
      //  FOR DEBUGGING
      console.log(id);
      console.log(newEaten);
    const id = $(this).data("id");
    const newEaten = $(this).data("neweaten");
    const newState = {
      eaten: newEaten
    };
    console.log(newEatenState);
    // Send the PUT request.
    $.ajax("/api/burgers" + id, {
      type: "PUT",
      data: newState
    }).then(
      () => {
        console.log("changed devoured to " + newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      name: $("#newBurgName").val()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      () => {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});