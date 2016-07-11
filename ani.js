$(document).ready(function(e) {
    var $this = $(".wrap3d");
    var hrztlstrip = 18;
    var vrtlstrip = 3;
    var speed = 10;
    $this.width(359);
    $this.height(640);
    var actualpos = 14;
    var dly = 100000;
    var move = false;
    var movel = false;
    var mover = false;
    var xPrev = 0;
    var vls = 0;
    var ht = 0;
    var as = 0;
    var bs = 0;
    var poswdth = 0;
    var poshght = 0;
    var heightwrap = $this.height();
    var widthwrap = $this.width();
    var acp = widthwrap / heightwrap;
    var rheight = 359 *6/2;
    var rwidth = 640 *6/2;
    var sth = rwidth / acp;
    $this.width(rwidth);
    $this.height(sth);
    var FF = !(window.mozInnerScreenX == null);
    $this.css({ "background-size": rwidth * hrztlstrip + "px" + " " + sth * vrtlstrip + "px", "-moz-background-size": rwidth * hrztlstrip + "px" + " " + sth * vrtlstrip + "px", "-webkit-background-size": rwidth * hrztlstrip + "px" + " " + sth * vrtlstrip + "px", "-o-background-size": rwidth * hrztlstrip + "px" + " " + sth * vrtlstrip + "px" });
    $this.append("<div class='airow-left'></div><div class='airow-right'></div>");
    $(".buttonpoint").click(function(e) { specificpos(6) });
    $(".buttonpoint2").click(function(e) { specificpos(15) });
    $(".buttonpoint3").click(function(e) { specificpos(24) });
    $(".buttonpoint4").click(function(e) { specificpos(33) });
    var width = rwidth;
    var height = sth;
    $this.on("mousedown", function() {
        $this.css({ "cursor": "-webkit-grabbing", "cursor": "-moz-grabbing" });
        move = true
    });
    $(".airow-left").on("mousedown", function() {
        $this.css({ "cursor": "-webkit-grabbing", "cursor": "-moz-grabbing" });
        movel = true;
        buttonclick()
    });
    $(".airow-right").on("mousedown", function() {
        $this.css({ "cursor": "-webkit-grabbing", "cursor": "-moz-grabbing" });
        mover = true;
        buttonclick()
    });
    $(document).on("mouseup", function() {
        $this.css({ "cursor": "-webkit-grab", "cursor": "-moz-grab" });
        move = false;
        movel = false;
        mover = false
    });
    $this.on("mousemove touchmove", function(event) {
        if (move == false) {
            return
        }
        xPrev < event.pageX ? right() : left();
        xPrev = event.pageX
    });

    function buttonclick() {
        if (movel) {
            setTimeout(function() {
                buttonclick();
                left()
            }, 0)
        }
        if (mover) {
            setTimeout(function() {
                buttonclick();
                right()
            }, 0)
        }
    }

    function left() {
        poswdth = as * rwidth;
        poshght = bs * sth;
        if (as == hrztlstrip) {
            as = 0;
            bs++
        }
        if (vrtlstrip == bs && as < hrztlstrip) {
            bs = 0;
            as = 0
        }
        vls++;
        if (vls == speed) {
            vls = 0;
            as++;
            $this.css({ "background-position": -poswdth + "px" + " " + -poshght + "px" })
        }
    }

    function right() {
        poswdth = as * rwidth;
        poshght = bs * sth;
        if (as < 0) {
            as = hrztlstrip - 1;
            bs--
        }
        if (as == 0 && bs == 0) {
            bs = vrtlstrip - 1;
            as = hrztlstrip - 1
        }
        vls++;
        if (vls == speed) {
            vls = 0;
            as--;
            $this.css({ "background-position": -poswdth + "px" + " " + -poshght + "px" })
        }
    }

    function specificpos(actualpos) {
        var fixps = actualpos - 1;
        if (bs <= parseInt(fixps / hrztlstrip)) {
            var myrotate = setInterval(function() {
                poswdth = as * rwidth;
                poshght = bs * sth;
                if (as == hrztlstrip) {
                    as = 0;
                    bs++
                }
                if (vrtlstrip == bs && as < hrztlstrip) {
                    bs = 0;
                    as = 0
                }
                vls++;
                if (vls == speed) {
                    vls = 0;
                    as++;
                    $this.css({ "background-position": -poswdth + "px" + " " + -poshght + "px" })
                }
                if (bs == parseInt(fixps / hrztlstrip)) {
                    if (as - 1 == fixps % hrztlstrip) { myrt() }
                }
            }, 0)
        }
        if (bs > parseInt(fixps / hrztlstrip)) {
            var myrotate = setInterval(function() {
                poswdth = as * rwidth;
                poshght = bs * sth;
                if (as < 0) {
                    as = hrztlstrip - 1;
                    bs--
                }
                if (as == 0 && bs == 0) {
                    bs = vrtlstrip - 1;
                    as = hrztlstrip - 1
                }
                vls++;
                if (vls == speed) {
                    vls = 0;
                    as--;
                    $this.css({ "background-position": -poswdth + "px" + " " + -poshght + "px" })
                }
                if (bs == parseInt(fixps / hrztlstrip)) {
                    if (as + 1 == fixps % hrztlstrip) { myrt() }
                }
            }, 0)
        }

        function myrt() { clearInterval(myrotate) }
    }



     /*$this.on("mouseout", function() {
        $this.css({ "cursor": "-webkit-grabbing", "cursor": "-moz-grabbing" });
        mover = true;
        buttonclick()
    });*/

// defualt
  /*  $this.css({ "cursor": "-webkit-grabbing", "cursor": "-moz-grabbing" });
        mover = true;
        buttonclick()*/


});
  