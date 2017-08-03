$(document).ready(function() {
    console.info("hi");


    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {

        var quote = jQuery.parseJSON( JSON.stringify(json) );

        $(".quote").html(quote.quote);
        $(".author").html(quote.author);

    });

});