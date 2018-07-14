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
                { "right": "90%" }, 5000, "linear",
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
                .animate({ bottom: "-10px" }, 500, 'linear')
        }
        else if (x == 40) {     //key down
            $('#trex')
                .animate({ bottom: "-180px" }, 500, 'linear')
        }
    });
    setInterval(function(){
        var trex_pos = $("#trex").position();


    })
    var score=0;
    trex_pos = $("#trex").position();
    flying_pos = $("#flying").position();
    obs_pos = $("#obstacle").position();
    coinup_pos = $("#coinup").position();
    coindn_pos = $("#coindn").position();
    setInterval(function(){
            if(trex_pos >= obs_pos){
                alert("game over");

            }

    });

 
});
