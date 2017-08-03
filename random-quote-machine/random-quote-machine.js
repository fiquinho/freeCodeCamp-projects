$(document).ready(function() {
    console.info("hi");


    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
         $(".quote").html(JSON.stringify(json));
       });

});