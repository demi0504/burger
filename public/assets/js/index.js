$(function() {
  $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = {
          devoured: true
      };

  $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured
  }).then(() => {
      location.reload();
    });
  });

  $(".create-burger-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#createBurger").val().trim(),
      devoured: false
    };

    $.ajax("/api/burgers", {
      type: "POST", 
      data: newBurger
    }).then(() => {
        location.reload();
    });
  });
});