(function($, game, window) {
    console.log(game);

    window.game = game;

    function error(err) {
        console.log("error", err);
        alert(err);
        throw err;
    }
    
    game.go = function(name) {
        $name = $("#" + name);
        console.log("$name", $name)
        if(!$name[0]) {
            error('Internal error, could not go to "' + name + '"');
        }
        $("#screen").html($name.html());
    }

    $(function() {
        game.go("start");
    })
})($, window.game || {}, window)
