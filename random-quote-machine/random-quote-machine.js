$(document).ready(function() {
    
    displayQuote();

    $(".button").click(displayQuote);

});

function displayQuote() {
    
    // Documentation: http://quotes.stormconsultancy.co.uk/api
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {

        var quote = jQuery.parseJSON( JSON.stringify(json) );

        $(".quote").html(quote.quote);
        $(".author").html(quote.author);

    });
};