$(document).ready(function() {
    
    displayQuote();

    $(".button").click(displayQuote);

    $('.twitter').click(function() {
        var url = 'https://twitter.com/intent/tweet/?text=';
        var quote = $(".quote").html();
        var author = $(".author").html();

        var query = quote + " - " + author + "&via=FedBogado"

        if(query.length <= 140) {
            url += quote + " - " + author + "&via=FedBogado" ;
            window.location.href = url;
        } else {
            $(".alert").css("display", "initial");
        }


        return false;
    });

});

function displayQuote() {
    
    // Documentation: http://quotes.stormconsultancy.co.uk/api
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {

        var quote = jQuery.parseJSON( JSON.stringify(json) );

        $(".quote").html(quote.quote);
        $(".author").html(quote.author);

        $(".alert").css("display", "none");
    });
};