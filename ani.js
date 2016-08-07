$(document).ready(function(e) {
    var $this = $(".wrap3d");
    var hrztlstrip = 18;
    var vrtlstrip = 3;
    var speed = 5;
    $this.width(165);
    $this.height(293.666666);
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
    var rheight = 293.666666 * 3 / 2;
    var rwidth = 165 * 3 / 2;
    var sth = rwidth / acp;
    $this.width(rwidth);
    $this.height(sth);
    var FF = !(window.mozInnerScreenX == null);
    $this.css({ "background-size": rwidth * hrztlstrip + "px" + " " + sth * vrtlstrip + "px", "-moz-background-size": rwidth * hrztlstrip + "px" + " " + sth * vrtlstrip + "px", "-webkit-background-size": rwidth * hrztlstrip + "px" + " " + sth * vrtlstrip + "px", "-o-background-size": rwidth * hrztlstrip + "px" + " " + sth * vrtlstrip + "px" });

    var width = rwidth;
    var height = sth;

    $this.on("mousedown touchstart", function() {
        $this.css({ "cursor": "-webkit-grabbing", "cursor": "-moz-grabbing" });
        move = true
    });

    $(document).on("mouseup touchend", function() {
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

    var move2 = false;

    var handleOrientation = function() {
        //      var x = Math.ceil(event.beta);  // In degree in the range [-180,180]
        var OriX = Math.floor(event.gamma),
            newX = Math.ceil(OriX / 3) // In degree in the range [-90,90]


            // ------------------------------



                var y = event.gamma; // In degree in the range [-90,90]

        // To make computation easier we shift the range of x and y to [0,180]
        y += 90;
        var totalMove = hrztlstrip * vrtlstrip,
        winfactor= 0.2;

        // max degrees divided by the total number of share items
        var winslice = 180 * winfactor / totalMove,
            margins = (180 - 180 * winfactor) / 2;

        // calculate which sharing item should be selected depending on the position of the touch/device
        posShareEl = 3*Math.max(Math.min(Math.floor((y - margins) / winslice), totalMove-1), 0) + 1;

console.log(posShareEl)


            //  --------------------
        //$('.x').text("x: " + x);
        // $('.y').text("y: " + posShareEl);

        if (move2) {

            if (xPrev < posShareEl) {
                right()
            } else if (xPrev > posShareEl) {
                left();
            }
            xPrev = posShareEl;
            $('.pos').text("position: " + posShareEl)
        };

    }
    window.addEventListener("deviceorientation", handleOrientation, true);

    $('.start').click(function() {
        move2 = !move2
        var status = move2 ? "On" : "Off"
        // $('.x span').text(status)
        $(this).text(status)

    })

});
