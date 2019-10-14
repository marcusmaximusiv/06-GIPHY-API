//Created an Array of topics
var topics = ["Batman", "Superman", "Spiderman", "Thor", "Hulk"];

function displayTopic() {
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=" + topic;

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
}

function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons").empty();

    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {
        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie-btn to our button
        a.addClass("topic-btn");
        // Adding a data-attribute
        a.attr("data-name", topics[i]);
        // Providing the initial button text
        a.text(topics[i]);
        // Adding the button to the buttons-view div
        $("#buttons").append(a);
    }
}


//clicking on the giphysearch button and it records the value and push the info
$("#giphysearch").on("click", function (event) {
    event.preventDefault();
    var topic = $("#giphyinput").val().trim();
    topics.push(topic);
    console.log(topics);
    renderButtons();
});
// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".topic-btn", displayTopic);

// Calling the renderButtons function to display the intial buttons
renderButtons();