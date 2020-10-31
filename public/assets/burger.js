$(function() {
    $(".devour").on("click", function(event) {
      let id = $(this).data("id");
      id = "/api/devour/" + id;
      $.ajax(id, { type: "PUT" }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      let name = $("#burgerName").val().trim();
      name = "/api/create/" + name;
      $.ajax(name, { type: "POST" }).then(
        function() {
          location.reload();
        }
      );
    });
  });