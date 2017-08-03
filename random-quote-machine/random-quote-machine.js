$(document).ready(function() {
    console.info("hi");
    $.ajaxSetup({
        headers : {
            "Access-Control-Allow-Origin": "*"
        }
    });

    $.getJSON("http://api.forismatic.com/api/1.0/method=getQuote&format=json&lang=en", function(json) {
         $(".quote").html(JSON.stringify(json));
       });


});