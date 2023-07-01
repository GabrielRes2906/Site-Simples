

$(document).ready( function() { 

    $.ajax({url: "./header.html", success: function(result){
        $("#div1").html(result);
    }});

})

