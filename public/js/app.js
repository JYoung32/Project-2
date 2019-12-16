//Confirm that page is successfully linked
console.log("linked");

var handleFormSubmit = function(event) {
    event.preventDefault();

    //Pulling info from form page
    var newFreelancer = {
        name: $("#nameInput").val().trim(),
        location: $("#stateInput").val().trim(),
        position: $("#positionInput").val().trim(),
        rate: $("#rateInput").val().trim(),
        email: $("#emailInput").val().trim()
    };

    //Confirm pulling information
    console.log(newFreelancer);

    //Post route to DB
    // $.post("/api/freelancers", newFreelancer, function (req, res))

    //Clear the form after button is clicked
    $("#nameInput, #locationInput, #positionInput, #rateInput, #emailInput").val("");

};

$("#submitFreelancer").on("click", handleFormSubmit);