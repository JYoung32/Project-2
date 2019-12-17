// Get references to page elements
var $submitBtn = $("#submitFreelancer");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/freelancers",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var newFreelancer = {
    name: $("#nameInput").val().trim(),
    location: $("#stateInput").val().trim(),
    position: $("#positionInput").val().trim(),
    rate: $("#rateInput").val().trim(),
    email: $("#emailInput").val().trim()
};
  if (
    !(
      newFreelancer.name &&
      newFreelancer.location &&
      newFreelancer.position &&
      newFreelancer.rate &&
      newFreelancer.email
    )
  ) {
    alert("You must enter a valid form!");
    return;
  }

  API.saveExample(newFreelancer);

  //Clear the form after button is clicked
  $("#nameInput, #locationInput, #positionInput, #rateInput, #emailInput").val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
