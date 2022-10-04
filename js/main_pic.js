var z_index = ["3", "2", "1"];
var pic_opacity = ["1", "0.75", "0.5"];
var picture_id = ["p1", "p2", "p3"];
var index = 0;
function leftButton() {
    for (var i = 0;i < 3;i++) {
        document.getElementById(picture_id[i]).style.zIndex = z_index[(index+i+1)%3];
        document.getElementById(picture_id[i]).style.opacity = pic_opacity[(index+i+1)%3];
    }
    index = (index+1)%3;
    console.log(index);
}

function rightButton() {
    for (var i = 0;i < 3;i++) {
        document.getElementById(picture_id[i]).style.zIndex = z_index[(index+i-1)%3];
        document.getElementById(picture_id[i]).style.opacity = pic_opacity[(index+i-1)%3];
    }
    if (index == 0) index = 2;
    else index--;
    console.log(index);
}
