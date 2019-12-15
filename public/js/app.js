console.log("linked");

var handleFormSubmit = function(event) {
    event.preventDefault();

    var newFreelancer = {
        name: $("#nameInput").val().trim(),
        location: $("#locationInput").val().trim(),
        position: $("#positionInput").val().trim(),
        rate: $("#rateInput").val().trim(),
        email: $("#emailInput").val().trim()
    };

    console.log(newFreelancer);
};

$("#submitFreelancer").on("click", handleFormSubmit);