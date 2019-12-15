//Confirm that page is successfully linked
console.log("linked");

var handleFormSubmit = function(event) {
    event.preventDefault();

    //Pulling info from form page
    var newFreelancer = {
        name: $("#nameInput").val().trim(),
        location: $("#locationInput").val().trim(),
        position: $("#positionInput").val().trim(),
        rate: $("#rateInput").val().trim(),
        email: $("#emailInput").val().trim()
    };

    //Confirm pulling information
    console.log(newFreelancer);

    //Post route to DB

    //Clear the form after button is clicked
    $("#nameInput, #locationInput, #positionInput, #rateInput, #emailInput").val("");


};

$("#submitFreelancer").on("click", handleFormSubmit);