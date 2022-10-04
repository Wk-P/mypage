var z_index = ["3", "2", "1"];
var pic_opacity = ["1", "0.75", "0.75"];
var picture_id = ["#p1", "#p2", "#p3"];
var picture_width_size = ["90%","75%","75%"];
var picture_top = ["120px", "30px", "400px"];
var picture_left = ["120px", "30px", "400px"];
var index = 0;
function leftButton() {
    var j = index+2;
    for (var i = 0;i < 3;i++) {
        $(picture_id[i]).animate({
            "left":picture_left[(j+i)%3],
            "top":picture_top[(j+i)%3]
        });
        $(picture_id[i]).css({
            "z-index":z_index[(j+i)%3],
            "opacity":pic_opacity[(j+i)%3],
            "width":picture_width_size[(j+i)%3],
            "transition":"all 1s ease 0s"
        });
    }
    index = (index + 2)%3;
    console.log("end index = ", index);
}

function rightButton() {
    var j = index+1
    for (var i = 0;i < 3;i++) {
        $(picture_id[i]).animate({
            "left":picture_left[(j+i)%3],
            "top":picture_top[(j+i)%3]
        });
        $(picture_id[i]).css({
            "z-index":z_index[(j+i)%3],
            "opacity":pic_opacity[(j+i)%3],
            "width":picture_width_size[(j+i)%3],
            "transition":"all 1s ease 0s"
        });
    }
    index = (index+1)%3;
    console.log("index = ",index);
}
