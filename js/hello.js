$(document).ready(function() {
    //alert("hello");
    $.ajax({
        url: "http://localhost:8888/greeting"
    }).then(function(data, status, jqxhr) {
        $('.greeting-id').append(data.id);
        $('.greeting-content').append(data.content);
        console.log(jqxhr);
    });
});