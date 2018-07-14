$(document).ready(function () {
    console.log("DOM lodded");
    setInterval(function () {
        var rand = Math.floor(Math.random() * 10) % 4 + 1;

        if (rand == 1) {
            $('#obstacles').append($('<img src="opp0.gif_c200" id="obstacle">').animate(
                { "right": "90%" }, 5000, "linear",
                function () {
                    $(this).remove();
                })
            );
        }
        else if (rand == 2) {
            $('#obstacles').append($('<img src="flyingbird.gif" id="flying">').animate(
                { "right": "80%" }, 5000, "linear",
                function () {
                    $(this).remove();
                })
            );
        }
        else if (rand == 3) {
            $('#obstacles').append($('<img src="coin.jpg" id="coinup">').animate(
                { "right": "90%" }, 6000, "linear",
                function () {
                    $(this).remove();
                })
            );
        }
        else if (rand == 4) {
            $('#obstacles').append($('<img src="coin.jpg" id="coindn">').animate(
                { "right": "90%" }, 6000, "linear",
                function () {
                    $(this).remove();
                })
            );
        }


    }, 3000);

    $(document).keydown(function (a) {
        var x = a.keyCode;
        if (x == 38) {//key up
            $('#trex')
                .animate({ bottom: "-180px" }, 500, 'linear')
        }
        else if (x == 40) {     //key down
            $('#trex')
                .animate({ bottom: "-650px" }, 500, 'linear')
        }
    }); 
});
