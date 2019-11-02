//Created an Array of topics
var topics = ["Batman", "Superman", "Spiderman", "Thor", "Hulk"];

function displayTopic() {
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics[1] + "api_key=RWpS1BhCyt7lvwnIpnSbv4S2JkGl5VHu&limit=10";
    console.log(queryURL);

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var div = $("<div>");
        div.addClass("gifs");
        $(".gifs").append('<div>' + '<p> Rating ' + response.data[0].rating + '</p>' + '<br>' + '<img src="' + response.data[0].embed_url + '"/>' + '</div>')
        console.log(response.data[0].embed_url)
        $(".gifs").append('<div>' + '<p> Rating ' + response.data[1].rating + '</p>' + '<br>' + '<img src="' + response.data[1].url + '"/>' + '</div>')
        $(".gifs").append('<div>' + '<p> Rating ' + response.data[2].rating + '</p>' + '<br>' + '<img src="' + response.data[2].url + '"/>' + '</div>')
        $(".gifs").append('<div>' + '<p> Rating ' + response.data[3].rating + '</p>' + '<br>' + '<img src="' + response.data[3].url + '"/>' + '</div>')
        $(".gifs").append('<div>' + '<p> Rating ' + response.data[4].rating + '</p>' + '<br>' + '<img src="' + response.data[4].url + '"/>' + '</div>')
        $(".gifs").append('<div>' + '<p> Rating ' + response.data[5].rating + '</p>' + '<br>' + '<img src="' + response.data[5].url + '"/>' + '</div>')
        $(".gifs").append('<div>' + '<p> Rating ' + response.data[6].rating + '</p>' + '<br>' + '<img src="' + response.data[6].url + '"/>' + '</div>')
        $(".gifs").append('<div>' + '<p> Rating ' + response.data[7].rating + '</p>' + '<br>' + '<img src="' + response.data[7].url + '"/>' + '</div>')
        $(".gifs").append('<div>' + '<p> Rating ' + response.data[8].rating + '</p>' + '<br>' + '<img src="' + response.data[8].url + '"/>' + '</div>')
        $(".gifs").append('<div>' + '<p> Rating ' + response.data[9].rating + '</p>' + '<br>' + '<img src="' + response.data[9].url + '"/>' + '</div>')
        $("#picture-view").prepend(div);
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
    var newtopic = $("#giphyinput").val().trim();
    topics.push(newtopic);
    console.log(newtopic);
    renderButtons();
});
// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".topic-btn", displayTopic);

// Calling the renderButtons function to display the intial buttons
renderButtons();
