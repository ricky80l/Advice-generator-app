$(".cont_dice").click(function() {
    $(".cont_dice").addClass("scale");
    setTimeout(function() {
        $(".cont_dice").removeClass("scale");
    }, 150);
    newAdv();
});

newAdv();

function newAdv() {


    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', '	https://api.adviceslip.com/advice', true);

    request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            var adv_id = data.slip.id;
            var adv = data.slip.advice;
            $(".adv_id").text(adv_id);
            $(".advice").text(adv);
            console.log(data.slip.id);
            console.log(data.slip.advice);
        } else {
            console.log('error');
        }
    };

    // Send request
    request.send();
};